import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Icon from '../components/utils/icon/icon';
import Notice from '../components/utils/notice/notice';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script async src='https://platform.twitter.com/widgets.js'></Script>
      <Head>
        <title>くれすぐたいらのページ</title>
        <meta name='description' content='くれすぐたいらのホームページ' />
        <link rel='icon' href='/kuresugutaira_fav.ico' />
      </Head>

      <div className={styles.profile}>
        <span className={styles.profile_icon}>
          <Icon />
        </span>
        <div className={styles.profile_self_intro}>
          <h2>くれすぐたいら</h2>
          <p>
            情報工学を専攻している大学3年生です。
            <br />
            音楽を聴いたりアニメを見たりするのが好きです。
          </p>
        </div>
      </div>

      <div className={styles.news_container}>
        <div className={styles.latest_notice}>
          <h2>最新のお知らせ</h2>
          <div className={styles.notice_container}>
            <Notice
              href='https://kuresugutaira.com/'
              title='ホームページを一新しました'
              description='変更前より情報が見やすくなりました'
            />
            <Notice
              href='https://unityroom.com/games/takarabako-atsume'
              title='新作ゲーム 宝箱集め を公開しました'
              description='タイルを跳ねながら宝箱を集めていくゲームです'
              date='2021/02/03'
            />
            <Notice
              href='https://soundcloud.com/vyy42cvqfubx/childlike'
              title='新曲 Childlike を公開しました'
              description='kawaii future bassの曲です'
              date='2021/3/25'
            />
          </div>
        </div>
        <div className={styles.twitter}>
          <h2>Twitter</h2>
          <a
            className='twitter-timeline'
            data-lang='ja'
            data-height='500'
            data-theme='dark'
            href='https://twitter.com/Kuresugutaira?ref_src=twsrc%5Etfw'
          >
            Tweets by Kuresugutaira
          </a>{' '}
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2022 kuresugutaira</p>
      </footer>
    </>
  );
}
