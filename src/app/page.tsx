/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel className="w-full max-w-4xl mx-auto my-8" opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <figure>
                <img
                  alt="classroom"
                  loading="lazy"
                  src="https://images.squarespace-cdn.com/content/v1/5d38c664faa31100010b218d/1564182950212-14OW7J85NOTO9KSVEZ0I/IMG_8900a.jpg?format=2500w"
                />
              </figure>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <figure>
                <img
                  alt="classroom"
                  loading="lazy"
                  src="//images.squarespace-cdn.com/content/v1/5d38c664faa31100010b218d/1564191178334-FRDSG4KBJRQEQSJGVYQ5/IMG_8739a.jpg?format=1500w
                        "
                />
              </figure>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
