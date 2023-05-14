import React, { useState } from "react";
import GraphSelector from "./pages/GraphSelectorSwot"; // import the GraphSelector component from the GraphSelector.js file
import Form from "./pages/form";
//import SumSelector from "./pages/SummationSelector";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Form />
      <GraphSelector />
    </div>
  );
}

export default App;
