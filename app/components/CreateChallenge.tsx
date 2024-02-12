'use client'

import { useState, useCallback, useEffect } from 'react';

import type { MenuProps } from 'antd';
import { Button, Dropdown, Menu } from 'antd';

import ChallengePrivate from '@/app/components/ChallengePrivate';
import ChallengeNumber from '@/app/components/ChallengeNumber';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const CreateChallenge: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    // const [isClosing, setIsClosing] = useState(false);

    // const handleCloseModal = useCallback(() => {
    //     setIsClosing(true);
    // }, []);

    // useEffect(() => {
    //     if (isClosing) {
    //         const timer = setTimeout(() => {
    //             onClose();
    //         }, 600); // 0.6초를 밀리초로 설정

    //         return () => clearTimeout(timer); // 컴포넌트가 unmount 되면 타이머를 제거하여 누수 방지
    //     }
    // }, [isClosing, onClose]);

    // useEffect(() => {
    //     // 모달이 열리거나 닫힐 때마다 isClosing 상태를 리셋
    //     setIsClosing(false);
    // }, [isOpen]);


    const [isClosing, setIsClosing] = useState(false);
    const [isOpenClass, setIsOpenClass] = useState('');

    const handleCloseModal = useCallback(() => {
        setIsClosing(true);
    }, []);

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                onClose();
                setIsClosing(false); // 모달이 닫힌 후에 isClosing 상태를 다시 false로 변경
            }, 600); // 0.6초를 밀리초로 설정

            return () => clearTimeout(timer); // 컴포넌트가 unmount 되면 타이머를 제거하여 누수 방지
        }
    }, [isClosing, onClose]);

    useEffect(() => {
        // 모달이 열릴 때는 .open 클래스 추가, 닫힐 때는 .open 클래스 제거
        setIsOpenClass(isOpen ? ' open' : '');
    }, [isOpen]);

    if (!isOpen) {
        return null; // 모달이 닫혀있을 때는 null을 반환하여 렌더링하지 않음
    }

    return (
        <div className={`create-challenge-modal${isOpenClass}${isClosing ? ' close' : ''}`}>
            <div className='modal-container'>
                <div className='modal-head'>
                    <div className='title'>
                        <h2>달성하고 싶으신 것이 있으신가요?</h2>
                        <h1>챌린지 생성</h1>
                    </div>
                    <div className='close' onClick={handleCloseModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 38" fill="none">
                            <path d="M20 36L2 19L20 2" stroke="#555555" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>    
                    </div>
                </div>
                <div className='modal-content'>
                    <form className='daily-form'>
                        <div className='daily-form-input challenge'>
                            <input className='input' placeholder='챌린지 이름'/>
                        </div>

                        <div className='daily-form-textarea challenge'>
                            <textarea className='textarea' placeholder='챌린지 내용'/>    
                        </div>

                        <ChallengeNumber />
                        <ChallengePrivate />
                        <button className='daily-btn'>만들기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateChallenge