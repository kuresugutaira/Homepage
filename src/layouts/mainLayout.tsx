import Header from '../components/header/header';
import styles from './mainLayout.module.scss';
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>くれすぐたいらのページ</title>
        <meta name='description' content='くれすぐたいらのホームページ' />
        <link rel='icon' href='/kuresugutaira_fav.ico' />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default MainLayout;
