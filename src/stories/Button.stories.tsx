// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Button } from "../components/button/Button";
import { ButtonProps } from "../types";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [withInfo],
  parameters: {
    info: {
      text: `
    Reusable button with 2 types of variants, more info below:
    ~~~js
    <Button>Click Here</Button>
    ~~~
  `,
    },
  },
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

const Template: Story<ButtonProps> = (args) => <Button {...args} onClick={action("clicked")} />;

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
