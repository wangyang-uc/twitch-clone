import React from "react";
import ReactDOM from "react-dom";


const Modal = props => {
  let jsx = (
    <div
      className="ui dimmer modals visiable active"
      onClick={props.onDismiss}
    >
      <div
        className="ui standard modal visiable active"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="header">{props.title}</div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(jsx, document.querySelector("#modal"));
};
export default Modal;
