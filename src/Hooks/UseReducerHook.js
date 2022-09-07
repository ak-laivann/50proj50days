import React, { useReducer } from "react";

// while using useReducer remember to follow these steps

// firsty present the intialstate of the object thats going to be changed
// object as parameter - the initialState may even have an object
const initialState = 0;
// const initialState = { firstCounter : 0 , secondCounter : 10}
// next define the reducer function which takes in two values a state aand an action
// object as parameter - the switch action will have a type which will be used in the jsx element with type pertaining to a string
const reducer = (state, action) => {
  // object as parameter - switch (action.type)
  // object as parameter - and the return statements will have the state + action.value
  // object as parameter - case 'string' return firstCounter: state.firstCounter + action.value
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    case "increment by 5":
      return state + 5;
    default:
      return state;
  }
};

function UseReducerHook() {
  document.title = "Use reducer Hook";

  // since useReducer is a function it has to be called inside the function that is being exported
  // the useReducer function will take in two arguments called reducer and initialstate
  // this useReducer must be used like useState like const [state, useState] = useState
  // the reducer function returns th current state called in here as count and a disatch that executes the function reducer
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* under the event handler, the dispatch should be specified with the cases */}
      {/* object as parameter - the button element with the dispatch should have the type as string and value too */}
      {/* <button onclick = {() => dispatch({type: 'increment', value : 5})}>Action</button> */}
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("increment by 5")}>Increment by 5</button>
      <p>{count}</p>
    </div>
  );
}

export default UseReducerHook;

// the useReducer can also be used ,ultiple times to use the same amount of code to maintain some amount of buttons or functionalities
