'use client'

import RegisterComponent from '@/app/components/Register_Component';
import ChatbotCompoent from '@/app/components/ChatBot';
import { useEffect } from 'react';

import Image from 'next/image';
import Login from '../components/Login_Component';

const Register = () => {
    return (
        <>
            <header className='daily-header'>
                <div className='brand-logo'>
                    <img className="inner" src='/UI/img/logo.png'/>
                </div>
                <div className='daily-btn get-started'>로그인</div>
            </header>
            <main className="main register-page">
                <div className='first-Section'>
                    <div className='g-container'>
                        <div className='register-head'>
                            <h1>반가워요!<br/>Daily As에 오신 것을 환영해요.</h1>
                        </div>
                    </div>
                </div>
            </main>
            {/* <Login /> */}
        </>
    )
}

export default Register