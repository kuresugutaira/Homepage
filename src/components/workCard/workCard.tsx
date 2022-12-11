import styles from 'src/components/workCard/workCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type WorkCardProps = {
  href: string;
  imageURL: string;
  title: string;
  children: React.ReactNode;
};

function WorkCard({ href, imageURL, title, children }: WorkCardProps): JSX.Element {
  return (
    <Link
      href={href}
      className={styles.card}
    >
      <Image
        src={imageURL}
        alt={title + 'の画像'}
        height={150}
        width={150}
      />
      <div className={styles.text_container}>
        <h2>{title}</h2>
        {children}
      </div>
    </Link>
  );
}

export default WorkCard;
