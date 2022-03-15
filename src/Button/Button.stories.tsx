import { Meta, Story } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story = () => <Button />;

export const Default = Template.bind({});
