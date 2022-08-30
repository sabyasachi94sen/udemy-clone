import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
} from "react-hook-form";

export type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  className?: string;
  form?: UseFormProps<TFormValues>;
};

// @see https://react-hook-form.com/advanced-usage#SmartFormComponent
// @see https://react-hook-form.com/ts#UseFormReturn
export function Form<
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
  onSubmit,
  children,
  className,
  form,
}: FormProps<TFormValues>): JSX.Element {
  const methods = useForm<TFormValues>(form);

  return (
    <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
}
