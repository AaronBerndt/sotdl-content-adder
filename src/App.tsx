import React, { useState } from "react";
import "antd/dist/antd.css";
import FormTypeSelector from "./components/FormTypeSelector";
import AncestryForm from "./components/AncestryForm";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  const [formType, setFormType] = useState("ancestry");

  const formToRender: any = {
    ancestry: () => <AncestryForm />,
    path: () => <AncestryForm />,
    item: () => <AncestryForm />,
    spell: () => <AncestryForm />,
    default: () => null,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <FormTypeSelector selectFormType={setFormType} />
      </div>

      <div>{formToRender[formType]()}</div>
    </QueryClientProvider>
  );
}

export default App;
