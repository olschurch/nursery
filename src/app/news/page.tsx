import { JSDOM } from 'jsdom';
import sanitizeHtml from 'sanitize-html';
import styles from './page.module.css';
import { getDocumentAsHtml } from '@/lib/google';
import { NEWSLETTER_DOC_ID } from '@/config';

async function getData() {
  try {
    const html = await getDocumentAsHtml(NEWSLETTER_DOC_ID);

    return html;
    // const res = await fetch(
    //   'https://docs.google.com/document/d/e/2PACX-1vQ4cv_cFJE9Ff2chhpZuJ6nSmFczGP_v_ZocNPMu41UQzpRUhqaNEZ9RAKqThTt7medn-rH7M3XvKKn/pub?embedded=true',
    // );
    // const text = await res.text();
    // const dom = new JSDOM(text);
    // const docContent = dom.window.document.body.querySelector('.doc-content');
    // // find all images and add loading=lazy to them
    // const images = docContent?.querySelectorAll('img');
    // images?.forEach((image) => {
    //   image.setAttribute('loading', 'lazy');
    //   image.width = DEFAULT_IMAGE_WIDTH;
    //   image.height = DEFAULT_IMAGE_WIDTH / DEFAULT_ASPECT;
    // });
    // const dirty = docContent?.innerHTML ?? '';
    // return sanitizeHtml(dirty, {
    //   allowedTags: ['p', 'span', 'img'],
    //   allowedClasses: {
    //     '*': false,
    //   },
    // });
  } catch (err) {
    console.error(err);
    return '<p>Sorry, unable to fetch newsletter</p>';
  }
}
export default async function News() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div dangerouslySetInnerHTML={{ __html: data ?? '' }}></div>
    </main>
  );
}
