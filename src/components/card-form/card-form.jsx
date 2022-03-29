import React from "react";
import './card-form.styles.scss';



export const CardForm = () => {
    return <div className="card-form-wrapper">
    <span className="card-form-title">
    Введіть наступні дані
    </span>
    <div className="inputs-form-wrapper">
    <span className="card-number-container">
    <label htmlFor="number">Номер карти</label>
    <div className="card-inputs">
    <input type="tel" id="number" inputmode="numeric" 
    pattern="[0-9\s]{4}" autocomplete="card-number" maxlength="4"
    />
    <input type="tel" id="number" inputmode="numeric" 
    pattern="[0-9\s]{4}" autocomplete="card-number" maxlength="4"
    />
    <input type="tel" id="number" inputmode="numeric" 
    pattern="[0-9\s]{4}" autocomplete="card-number" maxlength="4"
    />
    <input type="tel" id="number" inputmode="numeric" 
    pattern="[0-9\s]{4}" autocomplete="card-number" maxlength="4"
    />
    </div>
    </span>
    <span className="date-cvv-container">
        <span className="card-span" style={{marginRight: "50px", marginLeft: "20px"}}>
        <label htmlFor="date">Термін дії</label>
    <span class="expiration">
    <input type="text" name="month" maxlength="2" size="2"/>
    <span style={{
    display: "flex",
    alignItems: "center",
    color: "black", 
    backgroundColor: "#f3f7fa",
    height: "27px"
    }}>/</span>
    <input type="text" name="year" maxlength="2" size="2"/>
</span>
        </span>
    <span className="card-span">
    <label htmlFor="cvv">CVC/CVV</label>
    <input type="text" name="cvv" id="cvv"
    pattern="[0-9\s]{3}" maxlength="3" size="3"/>
    </span>
    </span>
    </div>
    </div>
}