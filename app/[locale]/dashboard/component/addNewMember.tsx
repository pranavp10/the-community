"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { DateOfBirth } from "./dateOfBirth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { addMemberSchema } from "../schema/addMemberSchema";
import FormInput from "./formInput";
import FormTextarea from "./formTextarea";
import { FromDropDown } from "./formDropdown";
import FormTelInput from "./fromTelInput";
import { nativePlace } from "@/data/nativeplace";
import { bloodGroup } from "@/data/bloodGroup";

export function OpenAddNewMemberDrawer({
  addButtonName,
}: {
  addButtonName: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button onClick={() => setOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          {addButtonName}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[96%]">
        <ProfileForm className="px-4" />
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const t = useTranslations();
  const nativePlaceT = useTranslations("nativePlaceName");

  const form = useForm<z.infer<typeof addMemberSchema>>({
    resolver: zodResolver(addMemberSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof addMemberSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start overflow-auto gap-4 mb-3", className)}
      >
        <div className="grid gap-2">
          <Label htmlFor="surname" className="text-xl font-medium">
            {t("yourSurname")}
          </Label>
          <Input
            id="surname"
            className="text-xl font-medium"
            defaultValue={t("patel")}
            disabled
          />
        </div>
        <FormInput label={t("yourFirstName")} formName="firstName" />
        <FormInput label={t("yourFatherName")} formName="fatherName" />
        <FormTelInput label={t("contactNumber")} formName="contact" />
        <FromDropDown
          dropDownValue={nativePlace.map(({ label, value }) => ({
            label: nativePlaceT(value),
            value,
          }))}
          formName="nativePlace"
          label={t("nativePlace")}
          placeHolder={t("selectNativePlace")}
          enableSearch
        />
        <FromDropDown
          dropDownValue={["married", "unmarried"].map((value) => ({
            label: t(value),
            value: value,
          }))}
          formName="maritalStatus"
          label={t("maritalStatus")}
          placeHolder={t("selectBloodGroup")}
          scrollAreaHeight="h-auto"
        />
        <FromDropDown
          dropDownValue={bloodGroup.map((group) => ({
            label: group,
            value: group,
          }))}
          formName="bloodGroup"
          label={t("bloodGroup")}
          placeHolder={t("selectBloodGroup")}
        />
        <DateOfBirth />
        <FormInput label={t("eduction")} formName="eduction" />
        <FormInput label={t("occupation")} formName="occupation" />
        <FormTextarea label={t("livingPlace")} formName="livingPlace" />
        <FromDropDown
          dropDownValue={nativePlace.map(({ label, value }) => ({
            label: nativePlaceT(value),
            value,
          }))}
          formName="maternalPlace"
          label={t("maternalPlace")}
          placeHolder={t("selectMaternalPlace")}
          enableSearch
        />
        <Button type="submit" className="text-xl">
          {t("saveDetails")}
        </Button>
      </form>
    </Form>
  );
}
