'use client'

import RegisterComponent from '@/app/components/Register_Component';
import ChatbotCompoent from '@/app/components/ChatBot';
import { useEffect } from 'react';

const Register = () => {
    useEffect(() => {
        const head = document.querySelector('html')
        
        head?.classList.add('register')
    }, [])

    return (
        <main className="main register-page">
            <ChatbotCompoent />
            <RegisterComponent />
        </main>
    )
}

export default Register