import 'src/styles/globals.scss';
import type { AppProps } from 'next/app';
import MainLayout from 'src/layouts/mainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
