import styles from '../styles/about.module.scss';
import Profile from 'src/components/profile/profile';
import LinkCard from 'src/components/linkCard/linkCard';
import { client } from 'src/libs/client';
import type { About } from 'src/types/about';
import { GetStaticProps } from 'next';
import { ImageFileNameToURL } from 'src/utils/util';

type Props = {
  about: About[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Aboutのデータを全部取得する
  const data = await client.get({
    endpoint: 'about',
  });

  return {
    props: {
      about: data.contents,
    },
  };
};

function About({ about }: Props) {
  // Aboutのリンクカードのリスト
  // ビルド時にDBからとってきたaboutのデータを
  // LinkCardコンポーネントに変換してabout_listに入れる
  const about_list: JSX.Element[] = [];
  for (const e of about) {
    about_list.push(
      <LinkCard
        href={e.link}
        title={e.title}
        description={e.acountName}
        iconURL={ImageFileNameToURL(e.iconImageFileName)}
        isRoundIcon={e.isRoundIcon}
      />,
    );
  }

  return (
    <>
      <Profile />
      <div className={styles.linkcard_grid}>{about_list}</div>
    </>
  );
}

export default About;
