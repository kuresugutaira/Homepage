import Header from '../components/header/header';
import styles from './mainLayout.module.scss';
import Head from 'next/head';
import Footer from '../components/footer/footer';

type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>くれすぐたいらのページ</title>
        <meta
          name='description'
          content='くれすぐたいらのホームページ'
        />
        <link
          rel='icon'
          href='/kuresugutaira_fav.ico'
        />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
