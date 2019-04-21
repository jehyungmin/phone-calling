import React from 'react';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import './PhoneNumberList.css';

const PhoneNumberList = ({ padNum, onClick }) => {

    // let i = 0;
    // const padList = padNum.map(
    //     number => {
    //         return (
    //             i === 3
    //                 ? (<br/>)
    //                 : (<PhoneNumber eachNum = {padNum[i++]} key = { i } />)
    //             // <PhoneNumber eachNum = {padNum[i++]} key={i} />
                
    //         )
            
    //     }
    // )

    return (
        <div >
                        {/* {padList} */}
            <div className="numberList">
                <PhoneNumber onClick={onClick} eachNum={padNum[0]} />
                <PhoneNumber eachNum={padNum[1]} />
                <PhoneNumber eachNum={padNum[2]} />
            </div>
            <div className="numberList">
                <PhoneNumber eachNum={padNum[3]} />
                <PhoneNumber eachNum={padNum[4]} />
                <PhoneNumber eachNum={padNum[5]} />
            </div>
            <div className="numberList">
                <PhoneNumber eachNum={padNum[6]} />
                <PhoneNumber eachNum={padNum[7]} />
                <PhoneNumber eachNum={padNum[8]} />
            </div>
            <div className="numberList">
                <PhoneNumber eachNum={padNum[9]} />
                <PhoneNumber eachNum={padNum[10]} />
                <PhoneNumber eachNum={padNum[11]} />
            </div>
            <div className="numberList">
                <PhoneNumber eachNum={padNum[12]} />
                <PhoneNumber eachNum={padNum[13]} />
                <PhoneNumber eachNum={padNum[14]} />
            </div>

        </div>
    );
};

export default PhoneNumberList;