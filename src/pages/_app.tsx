import { CopilotKit } from '@copilotkit/react-core';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CopilotKit>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </CopilotKit>
  );
}