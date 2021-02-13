import React from 'react';
import { RiTicket2Line } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';

const iconStyle = {
    color: 'white',
    fontSize: 25
}

const TopNavi = () => {
    console.log('TopNavi')
    return (
        <div className='topNavi'>
            <div>
                <span><RiTicket2Line style={{ ...iconStyle, paddingLeft: '1rem' }}/></span>
            </div>
            <div>
                <span><img src='megabox.jpg' style={{ height: 25 }} alt='메가박스 로고'/></span>
            </div>
            <div>
                <span>
                    <span><AiOutlineBell style={{ ...iconStyle, paddingRight: '0.5rem' }}/></span>
                    <span><GoThreeBars style={{ ...iconStyle, paddingRight: '1rem'}}/></span>
                </span>
            </div>
        </div>
    );
}

export default React.memo(TopNavi);