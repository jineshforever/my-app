import React from "react";

function Alert(props) {

  const Capitalise=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
  }
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{Capitalise(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
