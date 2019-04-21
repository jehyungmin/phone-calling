import React from 'react';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import './PhoneNumberList.css';

const PhoneNumberList = ({ padNum, onClick, number}) => {

    return (
        <div >
            
            <div className="numberList" >
                <PhoneNumber name="1" number={number} onClick={onClick} eachNum={padNum[0]} />
                <PhoneNumber name="2" number={number} onClick={onClick} eachNum={padNum[1]} />
                <PhoneNumber name="3" number={number} onClick={onClick} eachNum={padNum[2]} />
            </div>
            <div className="numberList">
                <PhoneNumber name="4" number={number} onClick={onClick} eachNum={padNum[3]} />
                <PhoneNumber name="5" number={number} onClick={onClick} eachNum={padNum[4]} />
                <PhoneNumber name="6" number={number} onClick={onClick} eachNum={padNum[5]} />
            </div>
            <div className="numberList">
                <PhoneNumber name="7" number={number} onClick={onClick} eachNum={padNum[6]} />
                <PhoneNumber name="8" number={number} onClick={onClick} eachNum={padNum[7]} />
                <PhoneNumber name="9" number={number} onClick={onClick} eachNum={padNum[8]} />
            </div>
            <div className="numberList">
                <PhoneNumber name="*" number={number} onClick={onClick} eachNum={padNum[9]} />
                <PhoneNumber name="0" number={number} onClick={onClick} eachNum={padNum[10]} />
                <PhoneNumber name="#" number={number} onClick={onClick} eachNum={padNum[11]} />
            </div>
            <div className="numberList">
                <PhoneNumber name="NU" number={number} onClick={onClick} eachNum={padNum[12]} />
                <PhoneNumber name="CALL" number={number} onClick={onClick} eachNum={padNum[13]} />
                <PhoneNumber name="BS" number={number} onClick={onClick} eachNum={padNum[14]} />
            </div>

        </div>
    );
};

export default PhoneNumberList;