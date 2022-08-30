import { Meta, Story } from "@storybook/react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

import { Form, FormProps } from "./Form";

export default {
  title: "Libs/Form",
  component: Form,
} as Meta;

type FormValues = {
  name: string;
  email: string;
};
export const Default: Story<FormProps<FormValues>> = (args) => {
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ register, formState: { errors } }) => {
        return (
          <div className="space-y-4">
            <Input
              invalidText={errors?.email?.message}
              isInvalid={!!errors?.email}
              label="Email"
              {...register("email", { required: "This is required." })}
            />
            <Input
              invalidText={errors?.name?.message}
              isInvalid={!!errors?.name}
              label="Name"
              {...register("name", { required: "This is required." })}
            />
            <Button type="submit">Submit</Button>
          </div>
        );
      }}
    </Form>
  );
};

// export const Default: Story<FormProps<FormValues>> = (args) => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
//   } = useForm();
//   const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
//   console.log(
//     "file: Form.stories.tsx ~ line 59 ~ watchAllFields",
//     watchAllFields
//   );

//   const onSubmit = (data: FormValues) => console.log(data);

//   return (
//     <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
//       <div className="space-y-4">
//         <Input
//           invalidText={errors?.email?.message}
//           isInvalid={!!errors?.email}
//           label="Email"
//           {...register("email", { required: "This is required." })}
//         />
//         <Input
//           invalidText={errors?.name?.message}
//           isInvalid={!!errors?.name}
//           label="Name"
//           {...register("name", { required: "This is required." })}
//         />
//         <Button type="submit">Submit</Button>
//       </div>
//     </form>
//   );
// };

Default.args = {};
