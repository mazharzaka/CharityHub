import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function useCustomForm<T extends FieldValues >(schema: any) {
  const formMethods = useForm<T>({
    resolver: yupResolver(schema) as any,
  });

  return { ...formMethods };
}
