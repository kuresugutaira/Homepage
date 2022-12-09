import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Icon from '../components/utils/icon/icon';
import MainLayout from '../layouts/mainLayout';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>くれすぐたいらのページ</title>
        <meta name='description' content='くれすぐたいらのホームページ' />
        <link rel='icon' href='/kuresugutaira_fav.ico' />
      </Head>

      <Icon />

      <h1>くれすぐたいらのWebsite</h1>

      <p>
        情報系の学部に所属している大学3年生です。 UnityとC#を用いてゲームを制作したり、作曲したりしています。
        最近は機械学習にも少し興味があります。 創作全般が好きで、良く漫画やアニメ、イラスト等を見ています。
      </p>

      <h2>最新のお知らせ</h2>

      <footer>
        <p>&copy; 2020 kuresugutaira</p>
      </footer>
    </div>
  );
}
