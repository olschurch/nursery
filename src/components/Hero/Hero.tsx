/* eslint-disable @next/next/no-img-element */

import styles from "./Hero.module.css";

export function Hero({ src }: { src: string }) {
  return (
    <div className={styles["image-wrapper"]}>
      <figure>
        <img
          width={800}
          height={500}
          loading="eager"
          alt="classroom"
          src={src}
        />
      </figure>
    </div>
  );
}
