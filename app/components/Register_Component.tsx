import { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

const Register = () => {
    const swiperRef = useRef<any>(null);

    const RegStart = () => {
        swiperRef.current.swiper.slideTo(1);
    };
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
                    <Swiper ref={swiperRef} speed={600} allowTouchMove={false} className="content-swiepr">
                        <SwiperSlide>
                            <div className="register-container relative">
                                <div className="sub-title">
                                    <h1>약관 확인 후 동의해 주시기 바랍니다.</h1>
                                </div>
                                <div className="agreement">
                                    <div className='agreement-item'>
                                        <p><Link href='/'>개인정보 처리방침</Link> 및 <Link href='/'>이용약관</Link>을 확인하였으며, 이에 동의합니다.</p>
                                    </div>
                                    <div className='agree-btn' onClick={RegStart}>
                                        <p>동의 및 계속</p>
                                    </div>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="register-container relative">
                                <div className="sub-title">
                                    <h1>소셜 계정으로 가입</h1>
                                </div>
                                <div className="register">
                                    <div className="register-item">
                                        <Image src='/UI/img/google-login.jpg' alt='Google 계정 로그인' width={390} height={59}/>
                                    </div>
                                    <div className="register-item">
                                        <Image src='/UI/img/kakao-login.png' alt='KaKao 계정 로그인' width={390} height={59}/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Register