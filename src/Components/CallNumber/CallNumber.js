import React from 'react';
import './CallNumber.css';

const CallNumber = ({number}) => {

        let phoneFormat = 'number';
        if(number.length === 11){
            phoneFormat = number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
        }else if (number.length === 8){
            phoneFormat = number.replace(/(\d{4})(\d{4})/, '$1-$2')
        }else{
            if (number.indexOf('02') == 0) {
                phoneFormat = number.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3')
            } else {
                phoneFormat = number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
            }
        }

    return (
        <div className="numberWindow">
            <p>{phoneFormat}</p>
        </div>
    );
};

export default CallNumber;