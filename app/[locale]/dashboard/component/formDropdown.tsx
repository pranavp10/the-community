"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

export function FromDropDown({
  dropDownValue,
  label,
  formName,
  description,
  enableSearch,
  placeHolder,
  scrollAreaHeight,
}: {
  dropDownValue: { label: string; value: string }[];
  label: string;
  formName: string;
  description?: string;
  placeHolder: string;
  enableSearch?: boolean;
  scrollAreaHeight?: string;
}) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={formName}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel className="text-xl font-medium">{label}</FormLabel>
          <Popover modal={true}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "justify-between text-xl font-medium",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? dropDownValue.find(
                        (language) => language.value === field.value
                      )?.label
                    : placeHolder}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent className="w-full p-1 min-w-[var(--radix-popover-trigger-width)]">
              <Command>
                {enableSearch && (
                  <CommandInput placeholder="Search" className="h-9" />
                )}
                <ScrollArea
                  className={scrollAreaHeight ? scrollAreaHeight : "h-48"}
                >
                  <CommandEmpty>No found.</CommandEmpty>
                  <CommandGroup>
                    {dropDownValue.map((dropdownDetails) => (
                      <CommandItem
                        className="text-xl font-medium"
                        value={dropdownDetails.label}
                        key={dropdownDetails.value}
                        onSelect={() => {
                          form.setValue(formName, dropdownDetails.value);
                        }}
                      >
                        {dropdownDetails.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-6 w-6",
                            dropdownDetails.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
