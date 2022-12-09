import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import PageLink from './pageLink/pageLink';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.page_link_container}>
        <PageLink href='/'>Home</PageLink>
        <PageLink href='about'>About</PageLink>
        <PageLink href='works'>Works</PageLink>
        <PageLink href='notice'>Notice</PageLink>
      </span>
    </header>
  );
}

export default Header;
