import styles from './notice.module.scss';
import Link from 'next/link';

type NoticeProps = {
  href: string;
  children: React.ReactNode;
};

export default function Notice({ href, children }: NoticeProps): JSX.Element {
  return (
    <Link href={href} className={styles.notice}>
      {children}
    </Link>
  );
}
