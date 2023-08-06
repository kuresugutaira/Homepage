import { GetStaticProps } from 'next';
import styles from '../styles/notice.module.scss';
import NoticeCard from 'src/components/noticeCard/noticeCard';
import type { Notice } from 'src/types/notice';
import { client } from 'src/libs/client';
import { SimplifyDate } from 'src/utils/util';

type Props = {
  notice: Notice[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Noticeのデータを全部取得する
  const data = await client.get({
    endpoint: 'notice',
  });

  return {
    props: {
      notice: data.contents,
    },
  };
};

function Notice({ notice }: Props) {
  // notice_list: NoticeCardコンポーネントのリスト
  // ビルド時にgetStaticPropsで持ってきたデータ(notice)を
  // NoticeCardコンポーネントに変換してnotice_listに入れる
  const notice_list: JSX.Element[] = [];
  for (const e of notice) {
    notice_list.push(
      <NoticeCard
        href={e.link}
        title={e.title}
        description={e.description}
        // dateはyyyy-MM-ddの形にして表示する
        date={SimplifyDate(e.date)}
      />,
    );
  }
  return (
    <>
      <div className={styles.notice_card_grid}>{notice_list}</div>
    </>
  );
}

export default Notice;
