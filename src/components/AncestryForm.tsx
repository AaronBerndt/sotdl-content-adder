import React, { useState } from "react";
import useAddContent from "../hooks/useAddContent";
import LevelSelector from "./LevelSelector";
import { Ancestry, Characteristics, DetailChoices, Talents } from "./FormTypes";
import useAncestries from "./useAncestries";
import { AutoComplete, Col, Form, Grid, Input, Row } from "antd";
const { TextArea } = Input;

interface AncestryFormValues {
  name: string;
  description: string;
  characteristics: Characteristics;
  talents: Talents;
  book: string;
  page: string;
}

const Label = ({ title }: any) => (
  <label htmlFor={title} style={{ paddingRight: 50 }}>
    {title.toUpperCase()}
  </label>
);

export default function AncestryForm() {
  const { mutate: addAncestry } = useAddContent("ancestry");
  const { data: ancestries, isLoading } = useAncestries();
  const [talentList, setTalentList] = useState([]);
  const [nameOptions, setNameOptions] = useState<{ value: string }[]>([]);
  const [bookOptions, setBookOptions] = useState<{ value: string }[]>([]);

  const initiaValues: AncestryFormValues = {
    name: "",
    description: "",
    characteristics: [{ name: "Strength", value: 10, level: 0 }],
    talents: [{ name: "", description: "", level: 0 }],
    book: "",
    page: "",
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

  if (isLoading) {
    return <div>Is Loading</div>;
  }

  const onNameSearch = (searchText: string) => {
    setNameOptions(
      !searchText
        ? []
        : ancestries.filter(({ name }: Ancestry) => name.includes(name))
    );
  };
  const onBookSearch = (searchText: string) => {
    setNameOptions(
      !searchText
        ? []
        : ancestries.filter(({ book }: Ancestry) => book.includes(book))
    );
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  return (
    <>
      <Row>
        <Col>
          <AutoComplete
            options={ancestries.map(({ name }: Ancestry) => ({
              name,
              value: name,
            }))}
            style={{ width: 200 }}
            onSelect={() => onSelect}
            placeholder="Filter By Name"
          />
        </Col>
        <Col>
          <AutoComplete
            options={ancestries.map(({ book }: Ancestry) => ({
              name: book,
              value: book,
            }))}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={onBookSearch}
            placeholder="Filter By Book"
          />
        </Col>
      </Row>
      <Form>
        {ancestries.map((ancestry: Ancestry) => (
          <Form initialValues={ancestry} key={ancestry._id}>
            <Form.Item label="Name" name="name">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Book" name="book">
              <Input disabled />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Form>
        ))}
      </Form>
    </>
  );
}
