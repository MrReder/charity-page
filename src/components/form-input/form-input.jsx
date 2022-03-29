import React from "react";
import './form-input.styles.scss';

export const FormInput = ({ inputTitle, type, placeholder, 
    value, onChange, className, style, required }) => {
    return <div className="input-wrapper">
    <label className="input-title">
    {inputTitle}
    </label>
    <input
    style={style}
    className={className} 
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    />
    </div>
}