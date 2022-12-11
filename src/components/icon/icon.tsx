import Image from 'next/image';
import styles from './icon.module.scss';

// number | `&{number}` はImageのheight・widthが受け取るSafeNumber型と同じ型
type IconProps = {
  src: string;
  size: number | `${number}` | undefined;
  alt: string;
  children?: never;
};

function Icon({ src, size, alt, children }: IconProps): JSX.Element {
  return (
    <Image
      src={src}
      height={size}
      width={size}
      alt={alt}
      className={styles.icon}
    />
  );
}

export default Icon;
