'use client'

import SideBar from '@/app/components/Sidebar';
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper/modules';

const Todo = () => {
    return (
        <main className="main todo-page">
            <SideBar /> 
            <div className="daily-section" data-page-type="to-do">
                <div className="section-content">
                    <div className="section-head">
                        <div className="title">To-Do</div>
                        <div className='desc'>할 일을 관리하고 실천해 보세요!</div>
                    </div>
                    <Swiper className='to-do' 
                        slidesPerView={2}
                        spaceBetween={30}
                        allowTouchMove={false}
                        speed={1000}
                        navigation={true}
                        modules={[Navigation]}>
                        <SwiperSlide className='To-do-list today'>
                            <div className='head-title'>
                                <h2>오늘 (8/5)</h2>
                            </div>
                            <div className='list'>
                                <div className='Todo-item'>
                                    <div className='Todo-Head'>
                                        <div className='head-title'>
                                            <h1 className='title'>장 보기</h1>
                                            <div className='start-time'>13:30</div>
                                        </div>
                                        <div className='head-location'>
                                            <div className='logo'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="0.21rem" height="0.2rem" viewBox="0 0 21 20" fill="none">
                                                    <path d="M15.3197 2.83335C13.7302 1.41669 11.6387 0.666688 9.46358 0.916688C6.11723 1.16669 3.35649 3.58335 2.77087 6.66669C2.35258 8.66669 2.77087 10.6667 4.02576 12.3334L8.29236 18.25C8.62699 18.8334 9.37992 19.1667 10.1329 19.1667C10.8858 19.1667 11.6387 18.8334 12.057 18.1667L16.3236 12.25C17.2439 11 17.6621 9.58335 17.6621 8.08335C17.6621 6.08335 16.8256 4.16669 15.3197 2.83335Z" fill="#367AFF"/>
                                                    <path d="M10.1327 10.9167C11.7037 10.9167 12.9771 9.64814 12.9771 8.08333C12.9771 6.51853 11.7037 5.25 10.1327 5.25C8.56181 5.25 7.28833 6.51853 7.28833 8.08333C7.28833 9.64814 8.56181 10.9167 10.1327 10.9167Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className='name'>코스트코 양평점</div>
                                        </div>
                                    </div>
                                    <div className='Todo-memo'>
                                        <div className='title'>Memo</div>
                                        <div className='content'>캡슐커피, 스파게티 재료, 과자</div>
                                    </div>
                                    <div className='Todo-status'>
                                        <div className='complete'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 29 29" fill="none">
                                                <path d="M7.82422 10L13.7656 17.0142C14.1883 17.5133 14.9684 17.4789 15.3456 16.9445L25.8945 2" stroke="#367AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div className='Todo-item'>
                                    <div className='Todo-Head'>
                                        <div className='head-title'>
                                            <h1 className='title'>과제 제출</h1>
                                            <div className='start-time'>18:00</div>
                                        </div>
                                        <div className='head-location'>
                                            <div className='logo'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="0.21rem" height="0.2rem" viewBox="0 0 21 20" fill="none">
                                                    <path d="M15.3197 2.83335C13.7302 1.41669 11.6387 0.666688 9.46358 0.916688C6.11723 1.16669 3.35649 3.58335 2.77087 6.66669C2.35258 8.66669 2.77087 10.6667 4.02576 12.3334L8.29236 18.25C8.62699 18.8334 9.37992 19.1667 10.1329 19.1667C10.8858 19.1667 11.6387 18.8334 12.057 18.1667L16.3236 12.25C17.2439 11 17.6621 9.58335 17.6621 8.08335C17.6621 6.08335 16.8256 4.16669 15.3197 2.83335Z" fill="#367AFF"/>
                                                    <path d="M10.1327 10.9167C11.7037 10.9167 12.9771 9.64814 12.9771 8.08333C12.9771 6.51853 11.7037 5.25 10.1327 5.25C8.56181 5.25 7.28833 6.51853 7.28833 8.08333C7.28833 9.64814 8.56181 10.9167 10.1327 10.9167Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className='name'>스타벅스 문래동점</div>
                                        </div>
                                    </div>
                                    <div className='Todo-memo'>
                                        <div className='title'>Memo</div>
                                        <div className='content'>교수님 메일로 과제 제출</div>
                                    </div>
                                    <div className='Todo-status'>
                                        {/* <div className='complete'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 29 29" fill="none">
                                                <path d="M7.82422 10L13.7656 17.0142C14.1883 17.5133 14.9684 17.4789 15.3456 16.9445L25.8945 2" stroke="#367AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div> */}
                                    </div>
                                </div>


                                <div className='Todo-item'>
                                    <div className='Todo-Head'>
                                        <div className='head-title'>
                                            <h1 className='title'>스파게티 만들기</h1>
                                            <div className='start-time'>19:30</div>
                                        </div>
                                        <div className='head-location'>
                                            <div className='logo'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="0.21rem" height="0.2rem" viewBox="0 0 21 20" fill="none">
                                                    <path d="M15.3197 2.83335C13.7302 1.41669 11.6387 0.666688 9.46358 0.916688C6.11723 1.16669 3.35649 3.58335 2.77087 6.66669C2.35258 8.66669 2.77087 10.6667 4.02576 12.3334L8.29236 18.25C8.62699 18.8334 9.37992 19.1667 10.1329 19.1667C10.8858 19.1667 11.6387 18.8334 12.057 18.1667L16.3236 12.25C17.2439 11 17.6621 9.58335 17.6621 8.08335C17.6621 6.08335 16.8256 4.16669 15.3197 2.83335Z" fill="#367AFF"/>
                                                    <path d="M10.1327 10.9167C11.7037 10.9167 12.9771 9.64814 12.9771 8.08333C12.9771 6.51853 11.7037 5.25 10.1327 5.25C8.56181 5.25 7.28833 6.51853 7.28833 8.08333C7.28833 9.64814 8.56181 10.9167 10.1327 10.9167Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className='name'>집</div>
                                        </div>
                                    </div>
                                    <div className='Todo-memo'>
                                        <div className='title'>Memo</div>
                                        <div className='content'>토마토 스파게티 만들기</div>
                                    </div>
                                    <div className='Todo-status'>
                                        {/* <div className='complete'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 29 29" fill="none">
                                                <path d="M7.82422 10L13.7656 17.0142C14.1883 17.5133 14.9684 17.4789 15.3456 16.9445L25.8945 2" stroke="#367AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='To-do-list'>
                            <div className='head-title'>
                                <h2>내일 (7/29)</h2>
                            </div>
                            <div className='list'>
                                <div className='Todo-item'>
                                    <div className='Todo-Head'>
                                        <div className='head-title'>
                                            <h1 className='title'>Apple Store 픽업가기</h1>
                                            <div className='start-time'>10:40</div>
                                        </div>
                                        <div className='head-location'>
                                            <div className='logo'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="0.21rem" height="0.2rem" viewBox="0 0 21 20" fill="none">
                                                    <path d="M15.3197 2.83335C13.7302 1.41669 11.6387 0.666688 9.46358 0.916688C6.11723 1.16669 3.35649 3.58335 2.77087 6.66669C2.35258 8.66669 2.77087 10.6667 4.02576 12.3334L8.29236 18.25C8.62699 18.8334 9.37992 19.1667 10.1329 19.1667C10.8858 19.1667 11.6387 18.8334 12.057 18.1667L16.3236 12.25C17.2439 11 17.6621 9.58335 17.6621 8.08335C17.6621 6.08335 16.8256 4.16669 15.3197 2.83335Z" fill="#367AFF"/>
                                                    <path d="M10.1327 10.9167C11.7037 10.9167 12.9771 9.64814 12.9771 8.08333C12.9771 6.51853 11.7037 5.25 10.1327 5.25C8.56181 5.25 7.28833 6.51853 7.28833 8.08333C7.28833 9.64814 8.56181 10.9167 10.1327 10.9167Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className='name'>Apple 여의도</div>
                                        </div>
                                    </div>
                                    <div className='Todo-memo'>
                                        <div className='title'>Memo</div>
                                        <div className='content'>가기 전에 주문하고 가기!</div>
                                    </div>
                                    <div className='Todo-status'>
                                        <div className='complete'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 29 29" fill="none">
                                                <path d="M7.82422 10L13.7656 17.0142C14.1883 17.5133 14.9684 17.4789 15.3456 16.9445L25.8945 2" stroke="#367AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>

                                </div>

                                <div className='Todo-item'>
                                    <div className='Todo-Head'>
                                        <div className='head-title'>
                                            <h1 className='title'>민영이 생일파티</h1>
                                            <div className='start-time'>12:30</div>
                                        </div>
                                        <div className='head-location'>
                                            <div className='logo'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="0.21rem" height="0.2rem" viewBox="0 0 21 20" fill="none">
                                                    <path d="M15.3197 2.83335C13.7302 1.41669 11.6387 0.666688 9.46358 0.916688C6.11723 1.16669 3.35649 3.58335 2.77087 6.66669C2.35258 8.66669 2.77087 10.6667 4.02576 12.3334L8.29236 18.25C8.62699 18.8334 9.37992 19.1667 10.1329 19.1667C10.8858 19.1667 11.6387 18.8334 12.057 18.1667L16.3236 12.25C17.2439 11 17.6621 9.58335 17.6621 8.08335C17.6621 6.08335 16.8256 4.16669 15.3197 2.83335Z" fill="#367AFF"/>
                                                    <path d="M10.1327 10.9167C11.7037 10.9167 12.9771 9.64814 12.9771 8.08333C12.9771 6.51853 11.7037 5.25 10.1327 5.25C8.56181 5.25 7.28833 6.51853 7.28833 8.08333C7.28833 9.64814 8.56181 10.9167 10.1327 10.9167Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className='name'>민영이 집</div>
                                        </div>
                                    </div>
                                    <div className='Todo-memo'>
                                        <div className='title'>Memo</div>
                                        <div className='content'>집 책상에 있는 선물 꼭 들고가기!</div>
                                    </div>
                                    <div className='Todo-status'>
                                        <div className='complete'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 29 29" fill="none">
                                                <path d="M7.82422 10L13.7656 17.0142C14.1883 17.5133 14.9684 17.4789 15.3456 16.9445L25.8945 2" stroke="#367AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='To-do-list'>
                            <div className='head-title'>
                                <h2>이튿날 (7/30)</h2>
                            </div>
                            <div className='list'>
                                <div className='Todo-item'>
                                    <div className='Todo-Head'>
                                        <div className='head-title'>
                                            <h1 className='title'>장 보기</h1>
                                            <div className='start-time'>13:30</div>
                                        </div>
                                        <div className='head-location'>
                                            <div className='logo'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="0.21rem" height="0.2rem" viewBox="0 0 21 20" fill="none">
                                                    <path d="M15.3197 2.83335C13.7302 1.41669 11.6387 0.666688 9.46358 0.916688C6.11723 1.16669 3.35649 3.58335 2.77087 6.66669C2.35258 8.66669 2.77087 10.6667 4.02576 12.3334L8.29236 18.25C8.62699 18.8334 9.37992 19.1667 10.1329 19.1667C10.8858 19.1667 11.6387 18.8334 12.057 18.1667L16.3236 12.25C17.2439 11 17.6621 9.58335 17.6621 8.08335C17.6621 6.08335 16.8256 4.16669 15.3197 2.83335Z" fill="#367AFF"/>
                                                    <path d="M10.1327 10.9167C11.7037 10.9167 12.9771 9.64814 12.9771 8.08333C12.9771 6.51853 11.7037 5.25 10.1327 5.25C8.56181 5.25 7.28833 6.51853 7.28833 8.08333C7.28833 9.64814 8.56181 10.9167 10.1327 10.9167Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className='name'>코스트코 대구 혁신도시점</div>
                                        </div>
                                    </div>
                                    <div className='Todo-memo'>
                                        <div className='title'>Memo</div>
                                        <div className='content'>스타벅스 캡슐커피, 사과 주스, 타이어 센터</div>
                                    </div>
                                    <div className='Todo-status'>
                                        <div className='complete'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 29 29" fill="none">
                                                <path d="M7.82422 10L13.7656 17.0142C14.1883 17.5133 14.9684 17.4789 15.3456 16.9445L25.8945 2" stroke="#367AFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='To-do-list'>
                            <div className='head-title'>
                                <h2>7월 31일</h2>
                            </div>
                            <div className='list'>
                                <div className='Todo-item none-data'>
                                    <div className='title'>일정이 존재하지 않아요.</div>
                                    <div className='to-do-router'>등록하기</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </main>
    )
}

export default Todo