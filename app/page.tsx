'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const GoogleLogin: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/main')
  }, []);

  return <div>Redirecting to Google Login...</div>;
};

export default GoogleLogin;