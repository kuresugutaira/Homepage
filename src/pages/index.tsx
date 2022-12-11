import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Icon from '../components/icon/icon';
import NoticeCard from '../components/noticeCard/noticeCard';
import Script from 'next/script';
import Profile from '../components/profile/profile';
import Footer from '../components/footer/footer';

function Home() {
  return (
    <>
      <Script
        src='https://platform.twitter.com/widgets.js'
        strategy='afterInteractive'
      />

      <Profile />

      <div className={styles.news_container}>
        <div className={styles.latest_notice}>
          <h2>最新のお知らせ</h2>
          <div className={styles.notice_container}>
            <Link
              href='notice'
              className={styles.read_more}
            >
              もっと見る
            </Link>
            <NoticeCard
              href='https://kuresugutaira.com/'
              title='ホームページを一新しました'
              description='変更前より情報が見やすくなりました'
            />
            <NoticeCard
              href='https://unityroom.com/games/takarabako-atsume'
              title='新作ゲーム 宝箱集め を公開しました'
              description='タイルを跳ねながら宝箱を集めていくゲームです'
              date='2021/02/03'
            />
            <NoticeCard
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

      <Footer />
    </>
  );
}

export default Home;
