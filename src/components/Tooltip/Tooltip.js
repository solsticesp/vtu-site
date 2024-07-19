import React from "react";
import './Tooltip.css';

const Tooltip = ({ message, position, isShown, children }) => {

    return (
        <div className="tooltip-wrapper">
            <div className={`tooltip ${position} ${isShown ? 'hovered' : ''} `}>{message}</div>
            {children}
        </div>
    )
}

export default Tooltip;
