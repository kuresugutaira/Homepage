import styles from '../styles/works.module.scss';
import WorkCard from '../components/WorkCard/workCard';

function Works() {
  return (
    <>
      <div className={styles.work_card_grid}>
        <WorkCard
          href='https://soundcloud.com/vyy42cvqfubx/rhythmi'
          imageURL='/images/ryithmi.png'
          title='Ryithmi'
        >
          リズミカルな曲を
          <br />
          意識して作りました。
        </WorkCard>
        <WorkCard
          href='https://drive.google.com/drive/folders/1M5BWo_felWiwZwMoeTdZZVsm4DeTk-tH?usp=sharing'
          imageURL='/images/dungeon_run.png'
          title='Dungeon Run'
        >
          サークルで制作した
          <br />
          3Dのランゲームです。
        </WorkCard>
        <WorkCard
          href='https://unityroom.com/games/kainaoshi_atutyu'
          imageURL='/images/kai.png'
          title='宇宙で回なおし'
        >
          unity1weekにて制作した
          <br />
          アクションゲームです。
        </WorkCard>
      </div>
    </>
  );
}

export default Works;
