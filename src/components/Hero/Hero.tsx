/* eslint-disable @next/next/no-img-element */

import clsx from 'clsx';
import styles from './Hero.module.css';

export function Hero({
  src,
  alt,
  text,
  objectPosition,
}: Partial<{
  src: string;
  alt: string;
  text: string;
  objectPosition: string;
}>) {
  return (
    <div
      className={clsx(styles['image-wrapper'], {
        [styles.large]: Boolean(src),
      })}
    >
      <figure>
        {src && (
          <img
            width={800}
            height={500}
            loading="eager"
            alt={alt}
            src={src}
            style={{
              ...(objectPosition && { objectPosition }),
            }}
          />
        )}

        {text && src && (
          <div className={styles.overlay} data-testid="overlay" />
        )}
        {text && (
          <div
            className={clsx(styles.text, {
              [styles.shadow]: Boolean(src),
            })}
          >
            <h1>{text}</h1>
          </div>
        )}
      </figure>
    </div>
  );
}
