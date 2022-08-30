import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import { RadioGroup, RadioGroupProps } from "./RadioGroup";

export default {
  title: "Libs/RadioGroup",
  component: RadioGroup,
} as Meta;

export const Default: Story<RadioGroupProps> = (args) => {
  const [selected, setSelected] = useState();

  return (
    <RadioGroup
      {...args}
      value={selected}
      valueKey="label"
      onChange={setSelected}
    />
  );
};
Default.args = {
  options: [
    {
      label: "Public access",
    },
    {
      label: "Private to Project Members",
    },
    {
      label: "Private to you",
      description: "You are the only one able to access this project",
    },
  ],
};
