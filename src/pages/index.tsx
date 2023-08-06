import { GetStaticProps } from 'next';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import NoticeCard from 'src/components/noticeCard/noticeCard';
import Script from 'next/script';
import Profile from 'src/components/profile/profile';
import { client } from 'src/libs/client';
import { SimplifyDate } from 'src/utils/util';
import type { Notice } from 'src/types/notice';

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Noticeのデータを3件、新しい順に取得する
  const data = await client.get({
    endpoint: 'notice',
    queries: { limit: 3, orders: '-date' },
  });

  return {
    props: {
      notice: data.contents,
    },
  };
};

type Props = {
  notice: Notice[];
};

function Home({ notice }: Props) {
  // notice_list: NoticeCardコンポーネントのリスト
  // ビルド時にgetStaticPropsで持ってきたデータ(notice)を
  // NoticeCardコンポーネントに変換してnotice_listに入れる
  const notice_list: JSX.Element[] = [];
  for (let i = 2; i >= 0; i--) {
    const e = notice[i];
    notice_list.push(
      <NoticeCard
        href={e.link}
        title={e.title}
        description={e.description}
        date={SimplifyDate(e.date)}
      />,
    );
  }

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
            {notice_list}
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
