/* eslint-disable @next/next/no-img-element */

import styles from "./Hero.module.css";

export function Hero({
  src,
  alt,
  objectPosition,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  return (
    <div className={styles["image-wrapper"]}>
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
      </figure>
    </div>
  );
}
