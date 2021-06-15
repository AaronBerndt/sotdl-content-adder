import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormTypeSelector from "./components/FormTypeSelector";
import AncestryForm from "./components/AncestryForm";

function App() {
  const [formType, setFormType] = useState("ancestry");

  const formToRender: any = {
    ancestry: () => <AncestryForm />,
    path: () => <AncestryForm />,
    item: () => <AncestryForm />,
    spell: () => <AncestryForm />,
    default: () => null,
  };

  return (
    <>
      <div>
        <FormTypeSelector selectFormType={setFormType} />
      </div>

      <div>{formToRender[formType]()}</div>
    </>
  );
}

export default App;
