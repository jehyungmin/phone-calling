import React from 'react';
import './PhoneNumber.css';

const PhoneNumber = ({ eachNum, onClick, name }) => { 

    let styleName = "numStyle padNumerColor"
    if(name === "NU"){
        styleName = "NUColor numStyle "
    }else if(name === "BS") {
        styleName = "cancel"
    }else {
        styleName = "numStyle padNumerColor"
    }

    return (
        <div>
            <button name={name} onClick={e => onClick(e.target.name)} className={styleName}>{eachNum}</button>
        </div>
    );
};

export default PhoneNumber;