import styles from 'src/components/header/header.module.scss';
import PageLink from 'src/components/header/pageLink/pageLink';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className='pc'>Kuresugutaira</h1>
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
