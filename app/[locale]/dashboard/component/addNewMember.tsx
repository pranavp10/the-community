"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

export function OpenAddNewMemberDrawer({
  addButtonName,
}: {
  addButtonName: string;
}) {
  const [open, setOpen] = React.useState(false);
  const messages = useMessages();

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

  return (
    <form
      className={cn("grid items-start overflow-auto gap-4 mb-3", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="firstName" className="font-normal font-medium">
          {t("yourFirstName")}
        </Label>
        <Input id="firstName" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="firstname">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">{t("saveDetails")}</Button>
    </form>
  );
}
