/* eslint-disable @next/next/no-img-element */

import styles from './Hero.module.css';

export function Hero({
  src,
  alt,
  text,
  objectPosition,
}: {
  src: string;
  alt: string;
  text?: string;
  objectPosition?: string;
}) {
  return (
    <div className={styles['image-wrapper']}>
      <figure>
        <img
          width={800}
          height={500}
          loading="eager"
          alt={alt}
          src={src}
          style={{
            ...(objectPosition && {
              objectPosition,
            }),
          }}
        />
        {text && <div className={styles.overlay} data-testid="overlay" />}
        {text && (
          <div className={styles.text}>
            <h1>{text}</h1>
          </div>
        )}
      </figure>
    </div>
  );
}
