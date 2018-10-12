import React, { Fragment } from "preact-compat";

// AdoptModalContent stateless component;
function AdoptModalContent(props) {
  return (
    <Fragment>
      <h1>Would you like to adopt {props.name}?</h1>
      <div className="buttons">
        <button onClick={props.toggleModal}>Yes</button>
        <button onClick={props.toggleModal}>No</button>
      </div>
    </Fragment>
  );
}

export default AdoptModalContent;
