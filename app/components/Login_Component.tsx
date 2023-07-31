import { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";

const Login = () => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="daily-message-box">
            <div className="daily-message-box-container">
                <div className="daily-message-box-content absolute">
                    <header className="message-box-head relative">
                        <div className="brand-logo">
                            <img className="inner" src='/UI/img/logo.png'/>
                        </div>
                        <div className="message-box-close">
                            <Image src="/UI/img/close.png" alt="닫기" width={25} height={25}/>
                        </div>
                    </header>
                    <div className="register-container relative">
                        <div className="sub-title">
                            <h1>돌아오신 것을 환영해요!</h1>
                        </div>
                        <div className="register">
                            <div className="register-item">
                                <img src='/UI/img/google-login.jpg' alt='Google 계정 로그인'/>
                            </div>
                            <div className="register-item">
                                <img src='/UI/img/kakao-login.png' alt='KaKao 계정 로그인'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login