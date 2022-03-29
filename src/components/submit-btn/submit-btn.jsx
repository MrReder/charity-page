import React from "react";
import './submit-btn.styles.scss';

export const SubmitBtn = ({ btnText, onSubmit }) => {
    return <div className="btn-wrapper">
    <button className="button"
    onClick={onSubmit}
    >
     {btnText}
    </button>
    </div>
}