'use client'

import SideBar from "@/app/components/Sidebar";

import { Swiper, SwiperSlide } from "swiper/react";

import React, { useState } from 'react';

import CreateChallenge from "@/app/components/CreateChallenge";

const Challenge: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                    <div className="create-challenge" onClick={handleOpenModal}>
                        <svg width="0.62rem" height="0.62rem" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="37.5" cy="37.5" r="37" fill="white" stroke="#F5F4F4"/>
                            <path d="M38 21V38M38 38H21M38 38H55M38 38V55" stroke="#367AFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <CreateChallenge isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </main>
    )
}

export default Challenge