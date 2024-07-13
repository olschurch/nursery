import { JSDOM } from "jsdom";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch(
    "https://docs.google.com/document/d/e/2PACX-1vQ4cv_cFJE9Ff2chhpZuJ6nSmFczGP_v_ZocNPMu41UQzpRUhqaNEZ9RAKqThTt7medn-rH7M3XvKKn/pub?embedded=true"
  );
  const text = await res.text();
  const dom = new JSDOM(text);
  return `
  <style>
    body {
      padding: 2rem;
      font-family: 'PT_Serif', serif;
      color: hsl(214.74 50.67% 29.41%);
    }

    p {
    font-size: 1.33rem;
    line-height: 1.3;
    }
    .title {
      font-size: 36px;
    }

    @media (min-width: 760px){
      .title {
        font-size: 48px;
      } 
    }

    @media (min-width: 1020px){
      .title {
        font-size: 72px;
      } 
    }


    span:has(img),img {
      display: block;
      border-radius: 5px;
      width: 100% !important;
      height: auto !important;
    }
  </style>
  <body>${
    dom.window.document.body.querySelector(".doc-content")?.innerHTML
  }</body>
  `;
}
export default async function News() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <div>
        <iframe srcDoc={data} />
      </div>
    </main>
  );
}
