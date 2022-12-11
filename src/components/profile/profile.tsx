import styles from 'src/components/profile/profile.module.scss';
import Icon from 'src/components/icon/icon';

function Profile(): JSX.Element {
  return (
    <div className={styles.profile}>
      <span className={styles.profile_icon}>
        <Icon
          src='/images/kuresugutaira_icon.jpg'
          size={200}
          alt='kuresugutairaのアイコン画像'
          isRound={true}
        />
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
  );
}

export default Profile;
