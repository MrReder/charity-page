import React from "react";
import './entity-box.styles.scss';

export const EntityBox = ( { boxName } ) => {

    return <div className="entity-box">
    {boxName}
    </div>
}