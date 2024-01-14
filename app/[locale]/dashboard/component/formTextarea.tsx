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
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

const FormTextarea = ({
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
            <Textarea {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextarea;
