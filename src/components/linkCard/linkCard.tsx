import styles from './linkCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../icon/icon';

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  iconURL: string;
};

function LinkCard({ href, title, description, iconURL }: LinkCardProps): JSX.Element {
  return (
    <Link
      href={href}
      className={styles.link_card}
    >
      <Icon
        src={iconURL}
        size={100}
        alt={title + 'のアイコン画像'}
      />
      <div className={styles.text_container}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default LinkCard;