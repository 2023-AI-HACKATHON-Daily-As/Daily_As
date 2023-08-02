'use client'

import { useState, useCallback, useEffect } from 'react';

import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
        </a>
        ),
    },
    {
        key: '2',
        label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
        </a>
        ),
    },
    {
        key: '3',
        label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
        </a>
        ),
    },
];

const CreateChallenge: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null; // 모달이 닫혀있을 때는 null을 반환하여 렌더링하지 않음
    }

    return (
        <div className='create-challenge-modal'>
            <div className='modal-container'>
                <div className='modal-head'>
                    <div className='title'>
                        <h2>달성하고 싶으신 것이 있으신가요?</h2>
                        <h1>챌린지 생성</h1>
                    </div>
                    <div className='close' onClick={onClose}>
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
                        {/* <div className='daily-form-input challenge'>
                            <textarea className='textarea' placeholder='챌린지 내용'/>
                        </div> */}
                        {/* <div className='daily-form-input challenge'>
                            <Dropdown menu={{
                                items,
                                selectable: true,
                                defaultSelectedKeys: ['1'],
                            }} placement="bottomLeft">
                                <Button>bottom</Button>
                            </Dropdown>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateChallenge