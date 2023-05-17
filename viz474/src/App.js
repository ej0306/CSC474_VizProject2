import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import GraphSelector from "./pages/js_files/GraphSelectorSwot";
import Form from "./pages/js_files/form";
import PosBarGraph from "./pages/js_files/PositiveNegativeBar";
import SumBarGraph from "./pages/js_files/SummationSelector";
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
                <PosBarGraph />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*   data_s[0]["MIN PROB ADJUSTED VALUE"] +
     data_s[1]["MIN PROB ADJUSTED VALUE"] +
        data_s[2]["MIN PROB ADJUSTED VALUE"] + 
        (data_op[0]["MIN PROB ADJUSTED VALUE"] +
          data_op[1]["MIN PROB ADJUSTED VALUE"] +
          data_op[2]["MIN PROB ADJUSTED VALUE"]) -
        (data_w[0]["MIN PROB ADJUSTED VALUE"] +
          data_w[1]["MIN PROB ADJUSTED VALUE"] +
          data_w[2]["MIN PROB ADJUSTED VALUE"] +
          (data_t[0]["MIN PROB ADJUSTED VALUE"] +
            data_t[1]["MIN PROB ADJUSTED VALUE"] +
            data_t[2]["MIN PROB ADJUSTED VALUE"])),
      data_s[0]["REALISTIC PROB ADJUSTED VALUE"] +
        data_s[1]["REALISTIC PROB ADJUSTED VALUE"] +
        data_s[2]["REALISTIC PROB ADJUSTED VALUE"] +
        (data_op[0]["REALISTIC PROB ADJUSTED VALUE"] +
          data_op[1]["REALISTIC PROB ADJUSTED VALUE"] +
          data_op[2]["REALISTIC PROB ADJUSTED VALUE"]) -
        (data_w[0]["REALISTIC PROB ADJUSTED VALUE"] +
          data_w[1]["REALISTIC PROB ADJUSTED VALUE"] +
          data_w[2]["REALISTIC PROB ADJUSTED VALUE"] +
          (data_t[0]["REALISTIC PROB ADJUSTED VALUE"] +
            data_t[1]["REALISTIC PROB ADJUSTED VALUE"] +
            data_t[2]["REALISTIC PROB ADJUSTED VALUE"])),

      data_s[0]["MAX PROB ADJUSTED VALUE"] +
        data_s[1]["MAX PROB ADJUSTED VALUE"] +
        data_s[2]["MAX PROB ADJUSTED VALUE"] +
        (data_op[0]["MAX PROB ADJUSTED VALUE"] +
          data_op[1]["MAX PROB ADJUSTED VALUE"] +
          data_op[2]["MAX PROB ADJUSTED VALUE"]) -
        (data_w[0]["MAX PROB ADJUSTED VALUE"] +
          data_w[1]["MAX PROB ADJUSTED VALUE"] +
          data_w[2]["MAX PROB ADJUSTED VALUE"] +
          (data_t[0]["MAX PROB ADJUSTED VALUE"] +
            data_t[1]["MAX PROB ADJUSTED VALUE"] +
            data_t[2]["MAX PROB ADJUSTED VALUE"])),

      data_s[0]["AVERAGE PROB ADJUSTED VALUE"] +
        data_s[1]["AVERAGE PROB ADJUSTED VALUE"] +
        data_s[2]["AVERAGE PROB ADJUSTED VALUE"] +
        (data_op[0]["AVERAGE PROB ADJUSTED VALUE"] +
          data_op[1]["AVERAGE PROB ADJUSTED VALUE"] +
          data_op[2]["AVERAGE PROB ADJUSTED VALUE"]) -
        (data_w[0]["AVERAGE PROB ADJUSTED VALUE"] +
          data_w[1]["AVERAGE PROB ADJUSTED VALUE"] +
          data_w[2]["AVERAGE PROB ADJUSTED VALUE"] +
          (data_t[0]["AVERAGE PROB ADJUSTED VALUE"] +
            data_t[1]["AVERAGE PROB ADJUSTED VALUE"] +
            data_t[2]["AVERAGE PROB ADJUSTED VALUE"])),
      data_s[0]["3 POINT BASED PROB ADJUSTED VALUE"] +
        data_s[1]["3 POINT BASED PROB ADJUSTED VALUE"] +
        data_s[2]["3 POINT BASED PROB ADJUSTED VALUE"] +
        (data_op[0]["3 POINT BASED PROB ADJUSTED VALUE"] +
          data_op[1]["3 POINT BASED PROB ADJUSTED VALUE"] +
          data_op[2]["3 POINT BASED PROB ADJUSTED VALUE"]) -
        (data_w[0]["3 POINT BASED PROB ADJUSTED VALUE"] +
          data_w[1]["3 POINT BASED PROB ADJUSTED VALUE"] +
          data_w[2]["3 POINT BASED PROB ADJUSTED VALUE"] +
          (data_t[0]["3 POINT BASED PROB ADJUSTED VALUE"] +
            data_t[1]["3 POINT BASED PROB ADJUSTED VALUE"] +
            data_t[2]["3 POINT BASED PROB ADJUSTED VALUE"])),

      data_s[0]["PERT BASED PROB ADJUSTED VALUE"] +
        data_s[1]["PERT BASED PROB ADJUSTED VALUE"] +
        data_s[2]["PERT BASED PROB ADJUSTED VALUE"] +
        (data_op[0]["PERT BASED PROB ADJUSTED VALUE"] +
          data_op[1]["PERT BASED PROB ADJUSTED VALUE"] +
          data_op[2]["PERT BASED PROB ADJUSTED VALUE"]) -
        (data_w[0]["PERT BASED PROB ADJUSTED VALUE"] +
          data_w[1]["PERT BASED PROB ADJUSTED VALUE"] +
          data_w[2]["PERT BASED PROB ADJUSTED VALUE"] +
          (data_t[0]["PERT BASED PROB ADJUSTED VALUE"] +
            data_t[1]["PERT BASED PROB ADJUSTED VALUE"] +
            data_t[2]["PERT BASED PROB ADJUSTED VALUE"])), */
