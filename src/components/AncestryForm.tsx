import React, { useState } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FieldArray,
} from "formik";
import useAddContent from "../hooks/useAddContent";
import LevelSelector from "./LevelSelector";
import { Characteristics, DetailChoices, Talents } from "./FormTypes";

interface AncestryFormValues {
  name: string;
  description: string;
  characteristics: Characteristics;
  talents: Talents;
  book: string;
}

const Label = ({ title }: any) => (
  <label htmlFor={title} style={{ paddingRight: 50 }}>
    {title.toUpperCase()}
  </label>
);

export default function AncestryForm() {
  const { mutate: addAncestry } = useAddContent("ancestry");
  const [talentList, setTalentList] = useState([]);

  const initiaValues: AncestryFormValues = {
    name: "",
    description: "",
    characteristics: [{ name: "Strength", value: 10, level: 0 }],
    talents: [{ name: "", description: "", level: 0 }],
    book: "",
  };

  const attributeList = [
    "Strength",
    "Agility",
    "Will",
    "Intellect",
    "Perception",
    "Size",
    "Speed",
    "Defense",
    "Corruption",
    "Insanity",
    "Power",
    "Perception",
    "Health",
  ];
  return (
    <div>
      <h1>Add Ancestry</h1>
      <Formik
        initialValues={initiaValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);

          /* addAncestry() */
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <Label title="name" />
              <Field id="name" name="name" placeholder="" />
            </div>

            <div>
              <Label title="description" />
              <Field as="textarea" id="description" name="description" />
            </div>

            <h3>Additional Characteristics</h3>
            <FieldArray name="characteristics">
              {({ insert, remove, push }) => (
                <>
                  {values.characteristics.map((characteristic, i) => (
                    <div>
                      <Field as="select" name={`characteristics.${i}.name`}>
                        {attributeList.map((attribute, i) => (
                          <option value={attribute} key={i}>
                            {attribute}
                          </option>
                        ))}
                      </Field>
                      <Field
                        name={`characteristics.${i}.value`}
                        type="number"
                      />
                      <LevelSelector keyValue={i} fieldName="characteristics" />
                    </div>
                  ))}
                  <button
                    onClick={() =>
                      push({ name: "Strength", value: 0, level: 0 })
                    }
                  >
                    +
                  </button>
                </>
              )}
            </FieldArray>
            <div>
              <h3>Talents</h3>
              <FieldArray name="talents">
                {({ insert, remove, push }) => (
                  <>
                    {values.talents.map((talent, i) => (
                      <div>
                        <Field name={`talents.${i}.name`} type="text" />
                        <Field
                          name={`talents.${i}.description`}
                          type="string"
                        />
                        <LevelSelector keyValue={i} fieldName="talents" />
                      </div>
                    ))}

                    <button
                      onClick={() =>
                        push({
                          talentName: "",
                          talentDescription: "",
                          level: 0,
                        })
                      }
                    >
                      +
                    </button>
                  </>
                )}
              </FieldArray>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
