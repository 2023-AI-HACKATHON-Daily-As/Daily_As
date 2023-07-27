import '@/app/css/globals.css';
import '@/app/css/register.css';
import '@/app/css/chatbot.css';
import '@/app/css/sidebar.css';
import '@/app/css/to-do.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily As',
  description: 'None',
  viewport: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <body>
        <div id='root'>
          {children}
        </div>
      </body>
    </html>
  )
}
