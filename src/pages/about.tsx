import Profile from '../components/profile/profile';
import LinkCard from '../components/linkCard/linkCard';

function About() {
  return (
    <>
      <Profile />

      <LinkCard
        href='https://twitter.com/Kuresugutaira?s=20&t=uH-DV7Isl6S4EbG-h6YUmg'
        title='Twitter'
        description='くれすぐたいらのTwitter'
        iconURL='/images/twitter_icon.png'
      />
    </>
  );
}

export default About;
