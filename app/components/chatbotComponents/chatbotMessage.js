/**
 * ChatBot Component에 사용되는 컴포넌트입니다.
 * 쓰여지는 컴포넌트로 이동하려면 아래의 경로로 진입하십시오.
 * @/app/components/ChatBot.js
 * 
 * ChatBot Message Box (chatbot)
 */

const Message = ({ children }) => {
    return (
        <div className="chating--message Components__message">{children}</div>
    )
}

export default Message