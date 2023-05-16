import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import React, { useState } from "react";
import { View } from "react-native";

import { CheckboxList } from "./CheckboxList";

const CheckboxListMeta: ComponentMeta<typeof CheckboxList<string>> = {
  title: "CheckboxList",
  component: CheckboxList,
  argTypes: {
    onSelectionChange: { action: "changed checkbox selection" },
  },
  args: {
    items: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    selectedValues: [],
  },
};

export default CheckboxListMeta;

type CheckboxListStory = ComponentStory<typeof CheckboxList<string>>;

export const Default: CheckboxListStory = (args) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectionChange = (updatedValues: string[]) => {
    setSelectedValues(updatedValues);
  };

  return (
    <View style={{ margin: 15 }}>
      <CheckboxList
        {...args}
        selectedValues={selectedValues}
        onSelectionChange={handleSelectionChange}
      />
    </View>
  );
};
