import { Work } from 'src/types/work';
import styles from '../styles/works.module.scss';
import WorkCard from 'src/components/workCard/workCard';
import { GetStaticProps } from 'next';
import { client } from 'src/libs/client';
import { BackSlashNToBR, ImageFileNameToURL } from 'src/utils/util';

type Props = {
  works: Work[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Worksのデータを全部取得する
  const data = await client.get({
    endpoint: 'works',
  });

  return {
    props: {
      works: data.contents,
    },
  };
};

function Works({ works }: Props) {
  // work_list: WorkCardコンポーネントのリスト
  // ビルド時にgetStaticPropsで持ってきたデータ(works)を
  // WorkCardコンポーネントに変換してwork_listに入れる
  const work_list: JSX.Element[] = [];
  for (const e of works) {
    work_list.push(
      <WorkCard
        href={e.link}
        imageURL={ImageFileNameToURL(e.imageFileName)}
        title={e.title}
      >
        {BackSlashNToBR(e.description)}
      </WorkCard>,
    );
  }

  return <div className={styles.work_card_grid}>{work_list}</div>;
}

export default Works;
