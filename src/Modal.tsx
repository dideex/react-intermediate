// taken from React docs
import React from "react";
import { createPortal } from "react-dom";

const modalRoot: HTMLElement | null = document.getElementById('modal')

class Modal extends React.Component {
  private el = document.createElement('div');

  componentDidMount() {
    modalRoot && modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot && modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
