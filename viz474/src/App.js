import React, { useState } from "react";
import GraphSelector from "./pages/GraphSelectorSwot"; // import the GraphSelector component from the GraphSelector.js file
import Form from "./pages/form";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <GraphSelector />
      <Form />
    </div>
  );
}

export default App;
