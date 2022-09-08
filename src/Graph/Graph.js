import React, { useReducer } from "react";
import "./Graph.css";

const Graph = () => {
  document.title = "Graph";

  const graph = document.querySelector(".graph1");

  const total = document.getElementById("total");

  const maths = document.getElementById("maths");

  const initialState = 0;

  const ReducerFunction = (state, action) => {
    switch (action.type) {
      case "Handle Input Value":
        return {
          ...state,
          [action.field]: action.payload,
        };
      default:
        return state;
    }
  };

  function handleClick() {
    const Maths = Number(maths.value);

    const Total = Number(total.value);

    const Functioon = (Maths / Total) * 400;

    if (Total === 0) {
    } else if (Functioon > 400 || false) {
      graph.style.height = "400px";
    } else {
      graph.style.height = `${Functioon}px`;
    }
  }

  const [state, dispatch] = useReducer(ReducerFunction, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "Handle Input Value",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <>
      <div className="number">
        <div className="group">
          <input
            type="number"
            placeholder="Enter the Maths Value"
            id="maths"
            min="0"
            defaultValue={0}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="group">
          <input
            type="number"
            placeholder="Enter the Total Value"
            id="total"
            min="0"
            defaultValue={0}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button onClick={() => handleClick()}>Submit</button>
      </div>
      <div className="graph">
        <div className="graph1"></div>
      </div>
    </>
  );
};

export default Graph;
