import React from "react";

type Props = {
  selectFormType: Function;
};
export default function FormTypeSelector({ selectFormType }: Props) {
  const onChange = (e: any) => selectFormType(e.target.value);

  return (
    <>
      <select name="cars" onChange={onChange}>
        {["Path", "Ancestry", "Spell", "Item"].map((formType, i) => (
          <option value={formType.toLowerCase()} key={i}>
            {formType}
          </option>
        ))}
      </select>
    </>
  );
}
