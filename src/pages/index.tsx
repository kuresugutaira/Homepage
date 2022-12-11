import styles from 'src/styles/home.module.scss';
import Link from 'next/link';
import NoticeCard from 'src/components/noticeCard/noticeCard';
import Script from 'next/script';
import Profile from 'src/components/profile/profile';

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
              href='https://soundcloud.com/vyy42cvqfubx/childlike'
              title='新曲 Childlike を公開しました'
              description='kawaii future bassです'
              date='2021/3/25'
            />
            <NoticeCard
              href='https://soundcloud.com/vyy42cvqfubx/iigjgjz6smtm'
              title='新曲 夏と宇宙 を公開しました'
              description='夏と宇宙をイメージしました'
              date='2021/12/3'
            />
            <NoticeCard
              href='https://soundcloud.com/vyy42cvqfubx/bright-highway'
              title='新曲 Bright Highway を公開しました'
              description='DnB(仮)です'
              date='2022/1/3'
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
    </>
  );
}

export default Home;
