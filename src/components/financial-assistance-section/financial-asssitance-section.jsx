import React from "react";
import './financial-assistance-section.styles.scss';
import wrapper from '../../assets/wrapper.svg';
import { PaymentWay } from "../payment-way/payment-way";
import { CardForm } from "../card-form/card-form";

export const FinAssSctn = () => {
    return <div className="fin-ass-sctn-wrapper">
    <img src={wrapper} alt='wrappers-pic' className="fin-ass-sctn-wrapper-img"/>
    <div className="cloud-container" >
    <PaymentWay />
    <CardForm />
    </div>
    </div>
}