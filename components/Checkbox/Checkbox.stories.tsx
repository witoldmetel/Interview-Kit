import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import { Checkbox } from "./Checkbox";

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    onSelect: { action: "selected the checkbox" },
  },
  args: {
    label: "Checkbox",
  },
};

export default CheckboxMeta;

type CheckboxStory = ComponentStory<typeof Checkbox>;

const CheckboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <View style={{ margin: 15 }}>{children}</View>
);

export const Default: CheckboxStory = (args) => (
  <CheckboxWrapper>
    <Checkbox {...args} />
  </CheckboxWrapper>
);
export const Selected: CheckboxStory = (args) => (
  <CheckboxWrapper>
    <Checkbox {...args} selected />
  </CheckboxWrapper>
);
export const Disabled: CheckboxStory = (args) => (
  <CheckboxWrapper>
    <Checkbox {...args} disabled />
  </CheckboxWrapper>
);
