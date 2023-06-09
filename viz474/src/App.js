import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import GraphSelector from "./pages/js_files/GraphSelectorSwot";
import Form from "./pages/js_files/form";
import PosBarGraph from "./pages/js_files/PositiveNegativeBar";
import SumBarGraph from "./pages/js_files/SummationSelector";
import TotalBarGraph from "./pages/js_files/TotalSumGraph";
import "./App.css";

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
                <Link to="/">
                  <button class="btn-app">SWOT ANALYSIS GRAPHS</button>
                </Link>
                <Link to="/sum">
                  <button class="btn-app">SUMMATION</button>
                </Link>
                <Link to="/pos">
                  <button class="btn-app">POSITIVE || NEGATIVE</button>
                </Link>
                <Link to="/total">
                  <button class="btn-app">TOTAL DATA</button>
                </Link>
                {showForm && <Form />}
                <GraphSelector toggleForm={toggleForm} />
              </div>
            }
          />
          <Route
            path="/sum"
            element={
              <div>
                <Link to="/">
                  <button class="btn-app">SWOT ANALYSIS GRAPHS</button>
                </Link>
                <Link to="/sum">
                  <button class="btn-app">SUMMATION</button>
                </Link>
                <Link to="/pos">
                  <button class="btn-app">POSITIVE || NEGATIVE</button>
                </Link>
                <Link to="/total">
                  <button class="btn-app">TOTAL DATA</button>
                </Link>
                <SumBarGraph />
              </div>
            }
          />
          <Route
            path="/pos"
            element={
              <div>
                <Link to="/">
                  <button class="btn-app">SWOT ANALYSIS GRAPHS</button>
                </Link>
                <Link to="/sum">
                  <button class="btn-app">SUMMATION</button>
                </Link>
                <Link to="/pos">
                  <button class="btn-app">POSITIVE || NEGATIVE</button>
                </Link>
                <Link to="/total">
                  <button class="btn-app">TOTAL DATA</button>
                </Link>
                <PosBarGraph />
              </div>
            }
          />

          <Route
            path="/total"
            element={
              <div>
                <Link to="/">
                  <button class="btn-app">SWOT ANALYSIS GRAPHS</button>
                </Link>
                <Link to="/sum">
                  <button class="btn-app">SUMMATION</button>
                </Link>
                <Link to="/pos">
                  <button class="btn-app">POSITIVE || NEGATIVE</button>
                </Link>
                <Link to="/total">
                  <button class="btn-app">TOTAL DATA</button>
                </Link>
                <TotalBarGraph />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
