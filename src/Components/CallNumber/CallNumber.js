import React from 'react';
import './CallNumber.css';

const CallNumber = ({number}) => {
    return (
        <div className="numberWindow">
            <p>{number}</p>
        </div>
    );
};

export default CallNumber;