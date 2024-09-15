/* eslint-disable @next/next/no-img-element */

import clsx from 'clsx';
import styles from './Hero.module.css';
import { Shadows_Into_Light_Two } from 'next/font/google';

//const font = Sacramento({ weight: ['400'], subsets: ['latin'] });
const font = Shadows_Into_Light_Two({ subsets: ['latin'], weight: '400' });
export function Hero({
  src,
  alt,
  text,
  objectPosition,
  flip = false,
}: Partial<{
  src: string;
  alt: string;
  text: string;
  objectPosition: string;
  flip: boolean;
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
              ...(flip && { transform: 'scaleX(-1)' }),
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
            <h1
              className={clsx(font.className, styles.text, {
                [styles['use-shadow']]: src,
              })}
            >
              {text}
            </h1>
          </div>
        )}
      </figure>
    </div>
  );
}
