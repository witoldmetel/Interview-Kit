import Ionicons from "@expo/vector-icons/Ionicons";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import React from "react";

import { Button } from "./Button";

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Press Me!",
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Text: ButtonStory = (args) => <Button {...args} />;
export const Contained: ButtonStory = (args) => (
  <Button variant="contained" {...args} />
);
export const Outlined: ButtonStory = (args) => (
  <Button variant="outlined" {...args} />
);
export const Disabled: ButtonStory = (args) => (
  <Button variant="outlined" disabled {...args} />
);
export const Loading: ButtonStory = (args) => (
  <Button variant="outlined" loading {...args} />
);
export const Icon: ButtonStory = (args) => (
  <Button {...args}>
    <Ionicons name="md-checkmark-circle" size={32} color="#2ecc71" />
  </Button>
);
