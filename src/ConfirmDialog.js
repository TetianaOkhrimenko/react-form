import React from "react";
import "./ConfirmDialog.css";

export default function ConfirmDialog({
  title,
  children,
  confirm,
  cancel,
  open,
}) {
  return (
    <div className="ConfirmDialog">
      <dialog open={open}>
        <h4>{title}</h4>
        <p> {children}</p>
        <div className="button_wrapper">
          <button type="button" onClick={confirm}>
            Confirm
          </button>

          <button type="button" onClick={cancel}>
            Cancel
          </button>
        </div>
      </dialog>
    </div>
  );
}
