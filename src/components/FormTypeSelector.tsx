import React from "react";
import { Select } from "antd";
const { Option } = Select;

type Props = {
  selectFormType: Function;
};
export default function FormTypeSelector({ selectFormType }: Props) {
  const onChange = (value: string) => selectFormType(value);

  return (
    <Select defaultValue="Ancestry" onChange={onChange} style={{ width: 120 }}>
      {["Ancestry", "Path", "Spell", "Item"].map((formType, i) => (
        <Option value={formType.toLowerCase()} key={i}>
          {formType}
        </Option>
      ))}
    </Select>
  );
}
