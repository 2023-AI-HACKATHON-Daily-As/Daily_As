/**
 * GPT 기술이 적용된 Component를 열람하고 싶으시다면 아래의 경로로 진입하십시오.
 * @/app/components/GPTChatBot.js
 */

'use client'

import Link from 'next/link';

import { useEffect } from 'react'

import getContent from '@/app/content/brand.json';

import MessageBoxChatbot from '@/app/components/chatbotComponents/chatbotMessage'

const Chat = () => {
    // useEffect(() => {
    //     const Body = document.documentElement.style;

    //     Body.setProperty('background', '#f5f5f5')
    // }, [])
    return (
        <div className='customer-service'>
            <div className='style--chating not-gpt'>
                <div className='chating-header'>
                    <div className='g-container'>
                        <div className='chating-icon'>
                            <img src={getContent.chatboticon}/>
                        </div>
                        <div className='chating-info'>
                            <h1 className='name'>{getContent.chatbot}</h1>
                            <p className='desc'>만나서 반가워요! 저는 여러분의 도우미 {getContent.chatbot}에요! 앞으로 자주 만나요~</p>
                        </div>
                    </div>
                </div>
                <div className='chating-content g-container'>
                    <div className='chatBot-message'>
                        <div className='chatBot--profile'>
                            <img src={getContent.chatboticon}/>
                        </div>
                        <div className='chatBot--message'>
                            <MessageBoxChatbot>안녕하세요!</MessageBoxChatbot>
                            <MessageBoxChatbot>귀요미 윤</MessageBoxChatbot>
                        </div>
                    </div>
                    <div className='chatUser-message'>
                        <div className='chatBot--message'>
                            <MessageBoxChatbot>넹</MessageBoxChatbot>
                            <MessageBoxChatbot>녜</MessageBoxChatbot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat