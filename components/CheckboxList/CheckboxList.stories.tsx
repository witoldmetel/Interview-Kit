import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import React, { useState } from "react";
import { View } from "react-native";

import { CheckboxList } from "./CheckboxList";
import { Checkbox } from "../Checkbox/Checkbox";

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
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectAll = () => {
    const updatedValues = selectAll ? [] : args.items.map((item) => item.value);

    setSelectAll((prev) => !prev);
    setSelectedValues(updatedValues);
  };

  const handleSelectionChange = (updatedValues: string[]) => {
    setSelectedValues(updatedValues);
  };

  return (
    <View style={{ margin: 15 }}>
      <Checkbox
        label={selectAll ? "Deselect All" : "Select All"}
        value={selectedValues}
        selected={selectAll}
        onSelect={handleSelectAll}
        style={{ padding: 2, marginBottom: 10 }}
      />
      <CheckboxList
        {...args}
        selectedValues={selectedValues}
        onSelectionChange={handleSelectionChange}
      />
    </View>
  );
};
