'use client'

import React, { useEffect, useState } from 'react';

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import quoteData from '@/app/content/quote.json'

interface Data {
    [key: string]: string;
}
  

const SideBar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const data: Data = quoteData;
    const [randomText, setRandomText] = useState('');

    const getRandomText = () => {
        const keys = Object.keys(data);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return data[randomKey];
      };
    
      const handleRandomText = () => {
        const newText = getRandomText();
        setRandomText(newText);
      };
    
    useEffect(() => {
        const newText = getRandomText();
        setRandomText(newText);
        
        const currentPath = pathname;
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item) => {
            const itemPath = item.getAttribute('data-path');
            if (currentPath === itemPath) {
            item.classList.add('active');
            } else {
            item.classList.remove('active');
            }
        });
    }, [data, pathname]);

    const [isActive, setIsActive] = useState(false);

    const handleHoverEnter = () => {
        setIsActive(true);
    };

    const handleHoverLeave = () => {
        setIsActive(false);
    };

    const settingsOpen = () => {
        const settings = document.querySelector('.settings-modal');

        settings?.classList.add('active');
    }

    return (
        <div className='daily-sidebar'>
            <div className='container'>
                <div className='daily-account-info'>
                    
                    {/* 변경 되는 콘텐츠 */}
                    <div className='account-info__display'>
                        <div className='daily-account-item account__displayIMG'>
                            <img src='/UI/img/default_profile.png'/>
                        </div>
                        <div className='daily-account-item account__displayName'>
                            <span className='account-name'>사용자</span>
                            <div className='account-today'>오늘의 예정된 일정은 총 <span>3</span>개</div>
                        </div>
                    </div>                
                    <div className='account-info__setting'>
                        <div className='daily-account-item account__setting' onClick={settingsOpen}>
                            <svg width="0.256rem" height="0.256rem" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.2794 17.3869H17.25C16.9118 16.1548 15.8125 15.3334 14.4596 15.3334C12.8529 15.3334 11.5 16.6477 11.5 18.2084C11.5 19.7691 12.8529 21.0834 14.4596 21.0834C15.8125 21.0834 16.9118 20.2619 17.25 19.0298H19.2794C19.7868 19.0298 20.125 18.6191 20.125 18.2084C20.125 17.7155 19.7868 17.3869 19.2794 17.3869ZM14.4596 19.4405C13.7831 19.4405 13.1912 18.8655 13.1912 18.2084C13.1912 17.5512 13.7831 16.9762 14.4596 16.9762C15.136 16.9762 15.7279 17.5512 15.7279 18.2084C15.7279 18.8655 15.136 19.4405 14.4596 19.4405Z" fill="#9B9B9B"/>
                                <path d="M9.72606 17.25H3.6906C3.20124 17.25 2.875 17.7292 2.875 18.2083C2.875 18.7833 3.2828 19.1667 3.6906 19.1667H9.72606C10.2154 19.1667 10.5417 18.6875 10.5417 18.2083C10.5417 17.6333 10.1339 17.25 9.72606 17.25Z" fill="#9B9B9B"/>
                                <path d="M3.6906 5.75004H9.72606C10.2154 5.75004 10.5417 5.27087 10.5417 4.79171C10.5417 4.31254 10.1339 3.83337 9.72606 3.83337H3.6906C3.20124 3.83337 2.875 4.31254 2.875 4.79171C2.875 5.27087 3.2828 5.75004 3.6906 5.75004Z" fill="#9B9B9B"/>
                                <path d="M14.4596 7.66669C15.8125 7.66669 16.9118 6.84526 17.25 5.61312H19.2794C19.7868 5.61312 20.125 5.2024 20.125 4.79169C20.125 4.38097 19.7022 3.97026 19.2794 3.97026H17.25C16.9118 2.73812 15.8125 1.91669 14.4596 1.91669C12.8529 1.91669 11.5 3.23097 11.5 4.79169C11.5 6.3524 12.8529 7.66669 14.4596 7.66669ZM14.4596 3.55954C15.136 3.55954 15.7279 4.13454 15.7279 4.79169C15.7279 5.44883 15.136 6.02383 14.4596 6.02383C13.7831 6.02383 13.1912 5.44883 13.1912 4.79169C13.1912 4.13454 13.7831 3.55954 14.4596 3.55954Z" fill="#9B9B9B"/>
                                <path d="M3.72059 12.3214H5.75C6.08824 13.4714 7.1875 14.375 8.54044 14.375C10.1471 14.375 11.5 13.0607 11.5 11.5C11.5 9.93929 10.1471 8.625 8.54044 8.625C7.1875 8.625 6.08824 9.44643 5.75 10.6786H3.72059C3.21324 10.6786 2.875 11.0893 2.875 11.5C2.875 11.9107 3.29779 12.3214 3.72059 12.3214ZM8.54044 10.2679C9.21691 10.2679 9.80882 10.8429 9.80882 11.5C9.80882 12.1571 9.21691 12.7321 8.54044 12.7321C7.86397 12.7321 7.27206 12.1571 7.27206 11.5C7.27206 10.8429 7.86397 10.2679 8.54044 10.2679Z" fill="#9B9B9B"/>
                                <path d="M19.3007 10.5417H13.2827C12.7881 10.5417 12.4584 11.0209 12.4584 11.5C12.4584 11.9792 12.8706 12.4584 13.2827 12.4584H19.3007C19.7953 12.4584 20.125 11.9792 20.125 11.5C20.125 11.0209 19.7953 10.5417 19.3007 10.5417Z" fill="#9B9B9B"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='daily-search'>
                    <div className='side__searchBar'>
                        <input placeholder={randomText}/>
                        <div className='search-icon'>
                            <svg width="0.18rem" height="0.18rem" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0554 8.05262C15.0554 11.9506 11.9061 15.1052 8.02772 15.1052C4.14933 15.1052 1 11.9506 1 8.05262C1 4.15464 4.14933 1 8.02772 1C11.9061 1 15.0554 4.15464 15.0554 8.05262Z" stroke="#BDBDBD" stroke-width="2"/>
                                <line y1="-1" x2="6.68855" y2="-1" transform="matrix(0.706011 0.708201 -0.706011 0.708201 12.2778 13.2632)" stroke="#BDBDBD" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='daily-navs'>
                    <div className='nav-item' data-path="/main" onClick={() => router.push('/main')}>
                        <svg width="0.19rem" height="0.2rem" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0984 0H6.3262C4.15722 0 2.34973 1.91781 2.34973 4.20091V4.56621H3.25348H4.06684H4.15722C4.51872 4.56621 4.88021 4.93151 4.88021 5.47945C4.88021 5.93607 4.51872 6.39269 4.06684 6.39269H3.97647H3.1631H2.25936H0.903743C0.361497 6.39269 0 6.75799 0 7.30594C0 7.85388 0.361497 8.21918 0.903743 8.21918H2.34973V11.8721H3.25348H4.06684H4.15722C4.60909 11.8721 4.97059 12.3288 4.97059 12.7854C4.97059 13.242 4.60909 13.6986 4.15722 13.6986H4.06684H3.1631H2.25936H0.903743C0.451872 13.6986 0 14.1553 0 14.6119C0 15.0685 0.361497 15.5251 0.903743 15.5251H2.34973V15.7991C2.34973 18.1735 4.15722 20 6.3262 20H14.0984C16.2674 20 18.0749 18.0822 18.0749 15.7991V4.20091C18.0749 1.91781 16.2674 0 14.0984 0Z" fill="#FF6868"/>
                        </svg>
                        <div className='item-name'>전체 일정 보기</div>
                    </div>
                    <div className='nav-item' onClick={() => router.push('/alert')}>
                        <svg width="0.24rem" height="0.24rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22Z" fill="#968DFF"/>
                            <path d="M16.9 13H12C11.4 13 11 12.6 11 12V7.09998C11 6.49998 11.4 6.09998 12 6.09998C12.6 6.09998 13 6.49998 13 7.09998V11H16.9C17.5 11 17.9 11.4 17.9 12C17.9 12.6 17.5 13 16.9 13Z" fill="white"/>
                        </svg>
                        <div className='item-name'>알림</div>
                    </div>
                    <div className='nav-item' data-path="/to-do" onClick={() => router.push('/to-do')}>
                        <svg width="0.2rem" height="0.16rem" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.5L7.19563 14.1286C7.61601 14.584 8.34517 14.5513 8.72306 14.06L18 2" stroke="#367AFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='item-name'>To-Do</div>
                    </div>
                    <div className='nav-item' data-path="/challenge" onClick={() => router.push('/challenge')}>
                        <svg width="0.2rem" height="0.2rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7114 7.44773C19.4398 6.53947 18.6252 5.81286 17.72 5.72203L13.9183 5.17708L12.1985 1.54404C11.7459 0.544956 10.9312 0 9.93553 0C8.93984 0 8.12518 0.544956 7.6726 1.45322L5.95277 5.08625L2.15105 5.72203C1.24588 5.90369 0.431228 6.53947 0.159676 7.44773C-0.202392 8.44681 0.0691592 9.4459 0.793296 10.1725L3.59933 12.9881L2.96571 16.9845C2.78467 17.9835 3.23726 18.9826 4.05191 19.5276C4.5045 19.8001 4.95708 19.9817 5.50019 19.9817C5.95277 19.9817 6.31484 19.8909 6.67691 19.7092L10.1166 17.8019L13.5562 19.7092C14.3709 20.1634 15.3666 20.0725 16.1812 19.5276C16.9959 18.9826 17.4484 17.9835 17.2674 16.9845L16.6338 12.9881L19.4398 10.1725C19.8019 9.4459 20.0734 8.35599 19.7114 7.44773Z" fill="#F1BC00"/>
                        </svg>
                        <div className='item-name'>챌린지</div>
                    </div>
                </div>

                {/* <div className='daily-team-lounges'>
                    <div className='menu-title'>
                        <h2>팀 라운지</h2>
                    </div>
                    <div className='lounge-list'>
                        <div className={isActive ? `lounge active` : 'lounge'} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
                            <div className='lounge-logo'>
                                <img src='https://media.discordapp.net/attachments/1049692305331851317/1134107280690921502/6a1936d5cb5b315311fedbf2d4793c4d404cac83.jpg'/>
                            </div>
                            <div className='lounge-name'>
                                <p>Reverse: 1999</p>
                            </div>
                            <div className='lounge-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 1L7 7L1 13" stroke="#353535" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <div className='lounge-container'>
                                    <div className='lounge-head'>
                                        <div className='lounge-banenr'>
                                            <img src='https://cdn.discordapp.com/attachments/1049692305331851317/1134111946170437712/1500x500.jpg'/>
                                        </div>
                                    </div>
                                    <div className='lounge-info'>
                                        <div className='lounge-logo'>
                                            <img src='https://media.discordapp.net/attachments/1049692305331851317/1134107280690921502/6a1936d5cb5b315311fedbf2d4793c4d404cac83.jpg'/>
                                        </div>
                                        <div className='lounge-content'>
                                            <div className='HEAD'>
                                                <div className='lounge-name'>Reverse: 1999</div>
                                                <div className='lounge-desc'>리버스 업데이트 예정에 대한 라운지입니다.</div>
                                            </div>
                                            <div className='INFO'>
                                                <div className='team-member'>
                                                    <div className='logo'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M20.6791 17.4082C19.6769 14.9592 17.7727 13.1224 15.4676 12.2041C16.7705 11.1837 17.5723 9.55102 17.5723 7.81633C17.5723 4.55102 15.0667 2 11.9598 2C8.85296 2 6.34741 4.55102 6.34741 7.71429C6.34741 9.44898 7.14919 11.0816 8.45207 12.102C6.14697 13.0204 4.24275 14.8571 3.24053 17.3061C2.83964 18.3265 2.93987 19.551 3.5412 20.4694C4.14253 21.4898 5.24497 22 6.44763 22H17.5723C18.7749 22 19.7772 21.3878 20.4787 20.4694C21.08 19.551 21.1803 18.4286 20.6791 17.4082ZM8.35185 7.71429C8.35185 5.67347 9.9554 4.04082 11.9598 4.04082C13.9643 4.04082 15.5678 5.67347 15.5678 7.71429C15.5678 9.7551 13.9643 11.3878 11.9598 11.3878C9.9554 11.3878 8.35185 9.7551 8.35185 7.71429ZM18.7749 19.449C18.4743 19.8571 18.0734 20.1633 17.5723 20.1633H6.34741C5.8463 20.1633 5.44542 19.9592 5.14475 19.449C4.84408 19.0408 4.84408 18.6327 5.04453 18.2245C6.24719 15.2653 8.95318 13.4286 11.9598 13.4286C14.9665 13.4286 17.6725 15.2653 18.8752 18.1224C19.0756 18.5306 18.9754 19.0408 18.7749 19.449Z" fill="black"/>
                                                        </svg>
                                                    </div>
                                                    <div className='title'>참여한 인원</div>
                                                    <div className='desc'>4명</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    )
}

export default SideBar