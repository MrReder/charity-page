import React from "react";
import ways from '../../assets/ways.svg';
import './payment-way.styles.scss';

export const PaymentWay = () => {
    return <div>
        <span className="payment-way-title">
        Спосіб оплати
        </span>
        <img src={ways} alt="ways-img" className="payment-way-img"/>
    </div>
}