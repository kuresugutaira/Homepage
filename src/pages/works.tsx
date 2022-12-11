import styles from 'src/styles/works.module.scss';
import WorkCard from 'src/components/WorkCard/workCard';

function Works() {
  return (
    <div className={styles.work_card_grid}>
      <WorkCard
        href='https://soundcloud.com/vyy42cvqfubx/rhythmi'
        imageURL='/images/ryithmi.png'
        title='Ryithmi'
      >
        リズミカルな曲を
        <br />
        意識して作りました
      </WorkCard>
      <WorkCard
        href='https://drive.google.com/drive/folders/1M5BWo_felWiwZwMoeTdZZVsm4DeTk-tH?usp=sharing'
        imageURL='/images/dungeon_run.png'
        title='Dungeon Run'
      >
        サークルで制作した
        <br />
        3Dのランゲームです
      </WorkCard>
      <WorkCard
        href='https://unityroom.com/games/kainaoshi_atutyu'
        imageURL='/images/kai.png'
        title='宇宙で回なおし'
      >
        unity1weekにて制作した
        <br />
        アクションゲームです
      </WorkCard>
      <WorkCard
        href='https://unityroom.com/games/takarabako-atsume'
        imageURL='/images/collect_treasure.png'
        title='宝箱あつめ'
      >
        タイルを踏んだり宝箱を
        <br />
        集めたりするゲームです
      </WorkCard>
      <WorkCard
        href='https://soundcloud.com/vyy42cvqfubx/childlike'
        imageURL='/images/childlike.png'
        title='Childlike'
      >
        kawaii future bassの
        <br />
        練習で制作した曲です
      </WorkCard>
      <WorkCard
        href='https://soundcloud.com/vyy42cvqfubx/iigjgjz6smtm'
        imageURL='/images/cosmosummer.png'
        title='夏と宇宙'
      >
        夏と宇宙をイメージして
        <br />
        制作した曲です
      </WorkCard>
      <WorkCard
        href='https://soundcloud.com/vyy42cvqfubx/bright-highway'
        imageURL='/images/bright_highway.png'
        title='Bright Highway'
      >
        DnBの練習で制作した
        <br />
        ちょっと明るい曲です
      </WorkCard>
    </div>
  );
}

export default Works;
