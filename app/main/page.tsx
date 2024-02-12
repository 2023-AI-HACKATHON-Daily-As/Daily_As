'use client'

import SideBar from '@/app/components/Sidebar';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Main: React.FC = () => {
    const router = useRouter();

    const handleLoginPopup = async () => {
        try {
            const config = {
                headers: {
                    // 'Authorization': `Bearer {token}`,
                    'Access-Control-Allow-Origin': '*'
                }
            };

            const popup = window.open('https://port-0-daily-as-back-eu1k2llkud4wye.sel4.cloudtype.app/auth/google/callback', 'Google Login', 'width=600,height=600');

            if (!popup) {
                console.log('팝업 차단이 감지되었습니다.');
                return;
            }

            // 팝업이 닫힐 때까지 대기
            await new Promise<void>((resolve) => {
                const checkPopupClosed = setInterval(() => {
                    if (popup.closed) {
                        clearInterval(checkPopupClosed);
                        resolve();
                    }
                }, 100);
            });

            // 팝업이 닫힌 후, 데이터를 요청
            const response = await axios.get('https://port-0-daily-as-back-eu1k2llkud4wye.sel4.cloudtype.app/auth/google/callback', config);
            const { statusCode, userId, accessToken } = response.data;

            console.log(statusCode);

            console.log(statusCode);
        } catch (error) {
            console.log('에러', error)
        }
    };
  return (
    <div>
        {/* <SideBar /> */}
      <h1>Main Page</h1>
      <button onClick={handleLoginPopup}>Google 로그인</button>
    </div>
  );
};
  
export default Main;