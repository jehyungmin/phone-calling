import React from 'react';
import './PhoneNumber.css';

const PhoneNumber = ({ eachNum, onClick }) => {
    

    return (
        <div>
            <p className="numStyle padNumerColor">{eachNum}</p>
        </div>
    );
};

export default PhoneNumber;