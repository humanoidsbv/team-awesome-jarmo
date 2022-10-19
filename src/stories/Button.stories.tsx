// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";

import { Button } from "../components/button/Button";
import { ButtonProps } from "../types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    hasIcon: { control: "boolean" },
    onClick: { action: "clicked" },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "button",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "button",
  disabled: true,
  variant: "secondary",
};
