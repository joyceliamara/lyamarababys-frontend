import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input, InputProps } from "../ui/input";

export default function TextField({ name, label, ...props }: TextFieldProps) {
  const methods = useFormContext();

  return (
    <div>
      {label && (
        <label htmlFor={name} className="font-semibold text-gray-700">
          {label}
        </label>
      )}
      <FormField
        control={methods.control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormControl>
              <Input
                {...props}
                {...field}
                id={name}
                value={formatValue(props.type, field.value)}
              />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </div>
  );
}

function formatValue(type: TextFieldProps["type"], value: string) {
  if (type === "tel") {
    return value.replace(/\D/g, "");
  }

  return value;
}

type TextFieldProps = InputProps & {
  name: string;
  label?: string;
};
