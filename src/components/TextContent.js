import React, { useState } from "react";

export default function TextContent(props) {
  const upperCase = () => {
    setText(text.toUpperCase());
  };

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const updateValue = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
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
          <label className="text-dark" htmlFor="floatingTextarea">
            Enter the text
          </label>
        </div>
        <button className="btn btn-primary my-3 mx-3" onClick={upperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={lowerCase}>
          LowerCase
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charcters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
