import styles from './icon.module.scss';

// number | `&{number}` はimgのheight・widthが受け取るSafeNumber型と同じ型
type IconProps = {
  src: string;
  size: number | `${number}` | undefined;
  alt: string;
  isRound?: boolean;
  children?: never;
};

function Icon({ src, size, alt, isRound, children }: IconProps): JSX.Element {
  return (
    <img
      src={src}
      height={size}
      width={size}
      alt={alt}
      className={isRound ? styles.round_icon : styles.default_icon}
    />
  );
}

export default Icon;
