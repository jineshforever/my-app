import React, {useState} from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = ()=>{
      setText(text.toUpperCase());
      props.showAlert("The text has been Uppercased", "success");

  }
  
  const handleOnChange = (event)=>{
          setText(event.target.value);
  }

  const handleDownlick = () =>{
    setText(text.toLowerCase());
    props.showAlert("The text has been Lowercased", "success");
  }

  const handleClearClick=()=>{
      setText("");
      props.showAlert("The text has been cleared", "success");
  }

  const handleRemoveExtraSpaces=()=>{
    setText(text.replace(/ +/g, ' '))
    props.showAlert("The extra spaces have beem removed", "success");
  }

  const handleCopy=()=>{
 
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(text);
  props.showAlert("The text is copied to clipboard", "success");
  }

  const numberOfWords = (words) =>{
      let wordsArray = words.split(" ");
      let count = 0;
      wordsArray.forEach(element => {
          element!=="" && count++;
      });
      return count;
  }
  return (
      <>
    <div className="container" style={{backgroundColor:props.mode==="dark"?props.textFormColor:"white",
            color:props.textColor,
          }}>
      <div>
        <div className="mb-3">
            <h2>
            {props.heading}
            </h2>
          <textarea
            className={"form-control " +(props.mode==="light"?"exampleFormControlTextarea1":"exampleFormControlTextarea2")} 
            rows="8"
            value={text}
            placeholder = "Enter the text here"
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==="dark"?props.textFormColor:"white",
            color:props.textColor,
           
          }}
            
          ></textarea>
        </div>
      </div>
        <button className={`btn btn-${props.buttonColor}`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.buttonColor} mx-3`} onClick={handleDownlick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.buttonColor}`} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-${props.buttonColor} mx-3`} onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className={`btn btn-${props.buttonColor} mx-3`} onClick={handleCopy}>Copy text to clipboard</button>
    </div>
    <div className="container my-3"   style={{backgroundColor:props.mode==="dark"?props.textFormColor:"white",
            color:props.textColor,
          }}>
        <h1>Your text summary</h1>
        <p>{numberOfWords(text)} words and {text.length} characters</p>
        <h1>Time needed to read</h1>
        <p>{text.split(" ").length* 0.008} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Write something to Preview"}</p>
    </div>
    </>
  );
}
