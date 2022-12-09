import Image from 'next/image';
import styles from './icon.module.scss';

export default function Icon(): JSX.Element {
  return (
    <Image
      src='/images/kuresugutaira_icon.jpg'
      height={144}
      width={144}
      alt='kuresugutairaのアイコン'
      className={styles.roundIcon}
    />
  );
}
