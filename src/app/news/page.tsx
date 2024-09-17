import sanitizeHtml from 'sanitize-html';
import styles from './page.module.css';
import { getDocumentAsHtml } from '@/lib/google';
import { NEWSLETTER_DOC_ID } from '@/config';
import { Hero } from '@/components/Hero/Hero';

// Revalidate page every 10 mins
export const revalidate = 600;

export const metadata = {
  title: 'Newsletter | Nursery At OLS',
};

async function getData() {
  try {
    const html = await getDocumentAsHtml(NEWSLETTER_DOC_ID);

    return sanitizeHtml(html, {
      allowedTags: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'img',
        'ul',
        'li',
      ],
    });
  } catch (err) {
    console.error(err);
    return '<p>Sorry, unable to fetch newsletter</p>';
  }
}
export default async function News() {
  const data = await getData();

  return (
    <>
      <main className={styles.main}>
        <div
          dangerouslySetInnerHTML={{
            __html: data
              ? `<h1>The Nursery At OLS Newsletter</h1>${data}`
              : '<h1>The Nursery At OLS Newsletter</h1>',
          }}
        ></div>
      </main>
    </>
  );
}
