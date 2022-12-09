import Image from 'next/image';
import styles from './icon.module.scss';

export default function Icon(): JSX.Element {
  return (
    <Image
      src='/images/kuresugutaira_icon.jpg'
      height={200}
      width={200}
      alt='kuresugutairaのアイコン'
      className={styles.roundIcon}
    />
  );
}
