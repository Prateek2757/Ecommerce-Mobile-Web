import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {

    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age
      };
    }
    case "changed_age": {
      return {
        name :state.name,
        age: action.nextAge
      };
    }
    
    
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "decremented_age": {
       return {
        name: state.name,
        age: state.age - 1,
      };
    }
    
  }
  throw Error("Unknown action: " + action.type);
}

const initialState = { name: "Taylor", age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }
  function decrementButtonClick() {
    dispatch({ type: "decremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  function handleAgeChange(e) {
    dispatch({
      type: "changed_age",
      nextAge: e.target.value,
    });
  }
  

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <input value={state.age} onChange={handleAgeChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <button onClick={decrementButtonClick}>Decrement age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}
