import React, { useState } from "react";

export default function TextContent() {
  const upperCase = () => {
    console.log(text);
    setText(text.toUpperCase());
  };

  const updateValue = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div>
      <h1>Enter the Text Below: </h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={text}
          rows="8"
          onChange={updateValue}
        ></textarea>
        <label htmlFor="floatingTextarea">Enter the text</label>
      </div>
      <button className="btn btn-primary" onClick={upperCase}>
        UpperCase
      </button>
    </div>
  );
}
