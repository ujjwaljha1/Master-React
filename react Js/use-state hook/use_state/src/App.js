import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");

  //If I want to create a more usestate for form like structure then we can create array
  const initialState = {
    name: " ",
    email: "",
    password: " ",
    mobile: "",
    alt: "",
  };
  const [form, setForm] = useState({
    initialState,
  });

  const onNameChange = (e) => {
    setForm({
      ...form,
      name: e.target.value,
    });
  };
  const onEmailchange = (e) => {
    setForm({
      ...form,
      email: e.target.value,
    });
  };

  const onIncrementClick = () => {
    setCount(count + 1);
    // console.log(count + 1);
  };

  const onInputTextChange = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1> JSX </h1> <button onClick={onIncrementClick}> Increment </button>{" "}
      <div> {count} </div>{" "}
      <div>
        <input onChange={onInputTextChange} placeholder="Search.." />
      </div>{" "}
      <span className="align-item-center"> Form </span>{" "}
      <div>
        <label> Name </label>{" "}
        <input onChange={onNameChange} placeholder="Enter your name" />
      </div>{" "}
      <div>
        <label> Email </label>{" "}
        <input onChange={onEmailchange} placeholder="Enter your Email" />
      </div>{" "}
      <div>
        <label> Password </label>{" "}
        <input onChange={onSearchChange} placeholder="Enter your Password" />
      </div>{" "}
      <div>
        <label> Mobile Number </label>{" "}
        <input
          onChange={onSearchChange}
          placeholder="Enter your Mobile Number"
        />
      </div>{" "}
      <div>
        <label> Alt Number </label>{" "}
        <input onChange={onSearchChange} placeholder="Enter your Alt Number" />
      </div>
    </div>
  );
}

export default App;
