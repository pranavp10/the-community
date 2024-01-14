"use client";

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const FormTelInput = ({
  formName,
  label,
  description,
}: {
  formName: string;
  label: string;
  description?: string;
}) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xl font-medium">{label}</FormLabel>
          <FormControl>
            <div className="flex gap-2">
              <div className="border border-input flex justify-center items-center rounded-md px-2">
                +91
              </div>
              <Input type="tel" {...field} />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTelInput;
