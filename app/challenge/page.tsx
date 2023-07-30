'use client'

import SideBar from "@/app/components/Sidebar";

import { Swiper, SwiperSlide } from "swiper/react";

const Challenge = () => {
    return (
        <main className="main">
            <SideBar />
            <div className="daily-section" data-page-type="challenge">
                <div className="section-content">
                    <div className="section-head">
                        <div className="title">챌린지</div>
                    </div>
                    <div className="my-challenge">
                        <div className="challenge-title">
                            <h2>내 챌린지</h2>
                        </div>
                        <Swiper className="challenge" spaceBetween={32} slidesPerView={4}>
                            <SwiperSlide className="challenge-item">
                                <div className="cover-wrapper">
                                    <div className="cover">
                                        <img src='https://re1999.bluepoch.com/img/backstory/bg.png'/>
                                    </div>
                                </div>
                                <div className="footer">
                                    <div className="info">
                                        <div className="name">1999년 처럼 살아보기</div>
                                        <div className="desc">Reverse: 1999의 1999년 처럼 살아보기</div>
                                    </div>
                                    <div className="more">
                                        <div className="daily-btn">자세히 보기</div>
                                    </div>
                                </div>
                                
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                    <div className="open-challenge">
                        <div className="challenge-title">
                            <h2>공개된 챌린지</h2>
                        </div>
                        <div className="container">
                            {/* <div className="header">
                                <div className="header-search">
                                    <input placeholder="챌린지 검색" className="search-input"/>
                                    <div className="search-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                            <path d="M21.2992 11.1842C21.2992 16.8117 16.7521 21.3684 11.1496 21.3684C5.54705 21.3684 1 16.8117 1 11.1842C1 5.55669 5.54705 1 11.1496 1C16.7521 1 21.2992 5.55669 21.2992 11.1842Z" stroke="#BDBDBD" stroke-width="2"/>
                                            <line y1="-1" x2="9.28964" y2="-1" transform="matrix(0.706011 0.708201 -0.706011 0.708201 17.0525 18.4209)" stroke="#BDBDBD" stroke-width="2"/>
                                        </svg>
                                    </div>
                                </div>
                            </div> */}
                            <div className="body">
                                <div className="challenge-item">
                                    <div className="cover-wrapper">
                                        <div className="cover">
                                            <img src='https://re1999.bluepoch.com/img/backstory/bg.png'/>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="info">
                                            <div className="name">1999년 처럼 살아보기</div>
                                            <div className="desc">Reverse: 1999의 1999년 처럼 살아보기</div>
                                        </div>
                                        <div className="more">
                                            <div className="daily-btn">자세히 보기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Challenge