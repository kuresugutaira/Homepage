import styles from '../styles/notice.module.scss';
import NoticeCard from '../components/noticeCard/noticeCard';

function Notice() {
  return (
    <>
      <div className={styles.notice_card_grid}>
        <NoticeCard
          href='https://soundcloud.com/vyy42cvqfubx/bright-highway'
          title='新曲 Bright Highway を公開しました'
          description='DnB(仮)です'
          date='2022/1/3'
        />
        <NoticeCard
          href='https://soundcloud.com/vyy42cvqfubx/iigjgjz6smtm'
          title='新曲 夏と宇宙 を公開しました'
          description='夏と宇宙をイメージしました'
          date='2021/12/3'
        />
        <NoticeCard
          href='https://soundcloud.com/vyy42cvqfubx/childlike'
          title='新曲 Childlike を公開しました'
          description='kawaii future bassです'
          date='2021/3/25'
        />
        <NoticeCard
          href='https://unityroom.com/games/takarabako-atsume'
          title='新作ゲーム 宝箱あつめ を公開しました'
          description='宝箱を集めていくゲームです'
          date='2021/02/03'
        />
        <NoticeCard
          href='https://kuresugutaira.com/'
          title='ホームページを一新しました'
          description='変更前より情報が見やすくなりました'
        />
      </div>
    </>
  );
}

export default Notice;
