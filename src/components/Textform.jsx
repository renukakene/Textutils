import React,{useState}from 'react'

export default function Textform(props) {

  const handleUpClick = () => {
    setText(text.toUpperCase());
  }

  const handleLoClick = () => {
    setText(text.toLowerCase());
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  const handleextraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text, setText] = useState("enter text here");

  return (
      <> 
        <div className="container">
          <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" onChange={handleOnChange} id="mybox" rows="8" value={text} ></textarea>
          </div>
          <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-dark mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-secondary my-2" onClick={() => { setText(""); }}>Clear Text</button>
          <button className="btn btn-secondary mx-2" onClick={handleextraspace}>Remove extra spaces</button>
        </div>

        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </> 
  )
}

