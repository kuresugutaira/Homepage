import styles from './notice.module.scss';
import Link from 'next/link';

type NoticeProps = {
  href: string;
  title: string;
  description: string;
  date?: string;
  children?: never;
};

export default function Notice({ href, title, description, date, children }: NoticeProps): JSX.Element {
  return (
    <Link href={href} className={styles.notice}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p className={styles.date}>{date}</p>
    </Link>
  );
}
