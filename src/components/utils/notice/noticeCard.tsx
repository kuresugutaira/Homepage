import styles from './noticeCard.module.scss';
import Link from 'next/link';

type NoticeCardProps = {
  href: string;
  title: string;
  description: string;
  date?: string;
  children?: never;
};

function NoticeCard({ href, title, description, date, children }: NoticeCardProps): JSX.Element {
  return (
    <Link href={href} className={styles.notice_card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p className={styles.date}>{date}</p>
    </Link>
  );
}

export default NoticeCard;
