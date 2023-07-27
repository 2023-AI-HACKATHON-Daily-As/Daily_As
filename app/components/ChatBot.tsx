/**
 * GPT 기술이 적용된 Component를 열람하고 싶으시다면 아래의 경로로 진입하십시오.
 * @/app/components/GPTChatBot.js
 */

'use client'

import Link from 'next/link';

import { useEffect, useRef } from 'react'

import getContent from '@/app/content/brand.json';

import TextMap from '@/app/register/TextMap_Register.json';

import MessageBoxChatbot from '@/app/components/chatbotComponents/chatbotMessage'

const Chat = () => {
    
    const chatingHead = useRef<HTMLDivElement>(null);
    const chatingContent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            chatingHead.current?.classList.add('animation');
        }, 1000)

        setTimeout(() => {
            chatingHead.current?.classList.add('up__start')
        }, 2000)

        setTimeout(() => {
            chatingContent.current?.classList.add('animation')
        }, 3900)
    }, []);

    
    return (
        <div className='customer-service'>
            <div className='style--chating not-gpt'>
                <div className='chating-header' ref={chatingHead}> 
                    <div className='g-container'>
                        <div className='chating-icon'>
                            <img src={getContent.chatboticon}/>
                        </div>
                    </div>
                </div>
                <div className='chating-content g-container' ref={chatingContent}>
                    <div className='chatBot-message'>
                        <div className='chatBot--profile'>
                            <img src={getContent.chatboticon}/>
                        </div>
                        <div className='chatBot--message'>
                            <MessageBoxChatbot>{TextMap.Register_Message1}</MessageBoxChatbot>
                            <MessageBoxChatbot>{TextMap.Register_Message2}</MessageBoxChatbot>
                            <MessageBoxChatbot>{TextMap.Register_Message3}</MessageBoxChatbot>
                        </div>
                    </div>
                    {/* <div className='chatUser-message'>
                        <div className='chatBot--message'>
                            <MessageBoxChatbot>넹</MessageBoxChatbot>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Chat