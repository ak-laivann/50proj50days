import React, { useReducer } from "react";
import "./Graph.css";

const Graph = () => {
  document.title = "Graph";

  const graph1 = document.querySelector(".graph1");

  const graph2 = document.querySelector(".graph2");

  const graph3 = document.querySelector(".graph3");

  const total = document.getElementById("total");

  const maths = document.getElementById("maths");

  const science = document.getElementById("science");

  const social = document.getElementById("social");

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

    const Science = Number(science.value);

    const Social = Number(social.value);

    const Total = Number(total.value);

    const Function1 = (Maths / Total) * 400;

    const Function2 = (Science / Total) * 400;

    const Function3 = (Social / Total) * 400;

    if (Total === 0) {
      graph1.style.height = "2px";
      graph2.style.height = "2px";
      graph3.style.height = "2px";
      window.alert("give me a number please");
    } else if ((Function1 >= 400) ^ (Function2 >= 400) ^ (Function3 >= 400)) {
      graph1.style.height = "400px";
      graph2.style.height = "400px";
      graph3.style.height = "400px";
    } else if (Function2 >= 400) {
      graph2.style.height = "400px";
    } else if (Function3 >= 400) {
      graph3.style.height = "400px";
    } else {
      graph1.style.height = `${Function1}px`;
      graph2.style.height = `${Function2}px`;
      graph3.style.height = `${Function3}px`;
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
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="group">
          <input
            type="number"
            placeholder="Enter the Science Value"
            id="science"
            min="0"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="group">
          <input
            type="number"
            placeholder="Enter the Social Value"
            id="social"
            min="0"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="group">
          <input
            type="number"
            placeholder="Enter the Total Value"
            id="total"
            min="0"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button onClick={() => handleClick()}>Submit</button>
      </div>
      <div className="graph">
        <div className="graph1"></div>
        <div className="graph2"></div>
        <div className="graph3"></div>
      </div>
    </>
  );
};

export default Graph;
