import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import GraphSelector from "./pages/js_files/GraphSelectorSwot"; // import the GraphSelector component from the GraphSelector.js file
import Form from "./pages/js_files/form";
import SumGraphSelect from "./pages/js_files/SummationSelector";
import "./App.css";
import PosBarGraph from "./pages/js_files/PositiveNegativeBar";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {showForm && <Form />}
                <GraphSelector toggleForm={toggleForm} />
                <Link to="/sum">
                  <button class="btn-app">SUMMATION BARS</button>
                </Link>
                <Link to="/pos">
                  <button class="btn-app">POSITIVE/NEGATIVE BARS</button>
                </Link>
              </div>
            }
          />
          <Route
            path="/sum"
            element={
              <div>
                <SumGraphSelect />
                <Link to="/">
                  <button class="btn-app">SWOT ANALYSIS GRAPHS</button>
                </Link>
                <Link to="/pos">
                  <button class="btn-app">POSITIVE/NEGATIVE BARS</button>
                </Link>
              </div>
            }
          />
          <Route
            path="/pos"
            element={
              <div>
                <PosBarGraph />
                <Link to="/sum">
                  <button class="btn-app">SUMMATION BARS</button>
                </Link>
                <Link to="/">
                  <button class="btn-app">SWOT ANALYSIS GRAPHS</button>
                </Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
