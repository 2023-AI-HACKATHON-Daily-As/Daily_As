/**
 * GPT 기술이 적용된 Component를 열람하고 싶으시다면 아래의 경로로 진입하십시오.
 * @/app/components/GPTChatBot.js
 */

import Link from 'next/link';

import getContent from '@/app/content/brand.json';

const Chat = () => {
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
            </div>
        </div>
    )
}

export default Chat