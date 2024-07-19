import React from "react";
import './ArrowButton.css';

const ArrowButton = ({direction = 'right', clickHandler}) => {

    return (
        <button className='button' onClick={clickHandler}>
            <div className={`arrow-button ${direction}`}></div>
        </button>
    )
}

export default ArrowButton;
