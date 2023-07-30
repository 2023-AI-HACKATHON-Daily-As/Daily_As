import '@/app/css/globals.css';
import '@/app/css/register.css';
import '@/app/css/chatbot.css';
import '@/app/css/sidebar.css';
import '@/app/css/to-do.css';
import '@/app/css/article.css';
import '@/app/css/settings.css';
import '@/app/css/challenge.css'

// import type { Metadata } from 'next';
import { Metadata } from 'next';

import Settings from '@/app/components/Settings';

export const metadata = {
  title: {
    default: "Daily As",
    template: `%s | Daily As`,
  },
  description: 'None'
  // viewport: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko-KR">
      <body>
        <div id='root'>
          {children}
        </div>
        <div>
          <Settings />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;