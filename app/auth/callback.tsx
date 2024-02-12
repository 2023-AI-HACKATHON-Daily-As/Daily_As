import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const GoogleCallback: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const { statusCode, userId, accessToken } = router.query;

    if (statusCode === '200') {
      // 로그인 성공 시 팝업 창 닫고 /main으로 이동
      window.opener.postMessage({ statusCode, userId, accessToken }, window.origin);
      window.close();
    } else {
      // 로그인 실패 시 처리 (예: 에러 페이지로 이동)
      router.push('/error'); // 에러 페이지로 이동하거나, 다른 처리를 할 수 있습니다.
    }
  }, [router.query]);

  return <div>Processing...</div>;
};

export default GoogleCallback;