import React from "react";
import './title-template.styles.scss';

export const Title = ( { titleName }  ) => {
    
    return <h1 className="title">
        {titleName}
    </h1>
}