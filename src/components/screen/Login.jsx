import React from 'react';
import { IoMdClose } from 'react-icons/io';

function Login() {
    return(
        <div className="login">
            <div className='login-top'>
                <div className='login-top-title'>
                    <h3>
                        로그인
                    </h3>
                </div>
                <div className='login-top-icon'>
                    <IoMdClose style={{ fontSize: 25 }} onClick={() => alert('test')}/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Login);