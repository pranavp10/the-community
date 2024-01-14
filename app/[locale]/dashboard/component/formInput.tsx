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

const FormInput = ({
  formName,
  label,
  description,
  inputType = "text",
}: {
  formName: string;
  label: string;
  description?: string;
  inputType?: string;
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
            <Input type={inputType} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
