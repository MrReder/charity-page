import React from "react";
import './assistance-type-box.styles.scss';

export const AssistanceBox = ({ title, imgSrc, imgAltDscr, 
    description, handleIconColor, value, style, dscrStyle }) => {
    return <div className="assistance-type-box-wrapper" defaultValue={value}>
     <div className="title-img-container" style={style}>
     <img src={imgSrc} alt={imgAltDscr} 
     onClick={handleIconColor} className="assistance-type-box-img"/>
     <span className="assistance-box-title">{title}</span>
     </div>
     <div className="dscr-container">
     <span className="assistance-box-description" style={dscrStyle}>
         {description}
     </span>
     </div>
    </div>
}