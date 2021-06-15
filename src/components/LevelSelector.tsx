import { Field } from "formik";
import React from "react";

export default function LevelSelector({ keyValue, fieldName }: any) {
  return (
    <Field as="select" name={`${fieldName}.${keyValue}.level`}>
      {[...Array(11).keys()].map((levelValue, i) => (
        <option value={levelValue} key={i}>
          {levelValue}
        </option>
      ))}
    </Field>
  );
}
