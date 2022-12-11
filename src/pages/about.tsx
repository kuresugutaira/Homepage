import styles from '../styles/about.module.scss';
import Profile from 'src/components/profile/profile';
import LinkCard from 'src/components/linkCard/linkCard';

function About() {
  return (
    <>
      <Profile />
      <div className={styles.linkcard_grid}>
        <LinkCard
          href='https://twitter.com/Kuresugutaira'
          title='Twitter'
          description='@kuresugutaira'
          iconURL='/images/twitter_icon.png'
        />
        <LinkCard
          href='https://github.com/kuresugutaira'
          title='GitHub'
          description='kuresugutaira'
          iconURL='/images/github_icon.png'
        />
        <LinkCard
          href='https://soundcloud.com/vyy42cvqfubx'
          title='Soundcloud'
          description='gope'
          iconURL='/images/soundcloud_icon.png'
          isRoundIcon={false}
        />
        <LinkCard
          href='https://zenn.dev/kuresugutaira'
          title='Zenn'
          description='kuresugutaira'
          iconURL='/images/zenn_icon.svg'
          isRoundIcon={false}
        />
        <LinkCard
          href='mailto:contact@kuresugutaira.com'
          title='Email'
          description='contact[at]{here.domain}'
          iconURL='/images/email_icon.png'
          isRoundIcon={false}
        />
      </div>
    </>
  );
}

export default About;
