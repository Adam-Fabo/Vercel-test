import Head from 'next/head';
import styles from './styles/Home.module.css'; // Assumes you have a `styles/Home.module.css` file


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A sample Next.js app using TypeScriptttttttttt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Welcome to My Next.js App</h1>
      </header>

      <main className={styles.main}>
        <p>This is a TypeScript-powered Next.js page.</p>
        <p>
          Learn more about Next.js and TypeScript by visiting{' '}
          <a className={styles.link} href="https://nextjs.org/docs/basic-features/typescript" target="_blank" rel="noopener noreferrer">
            the documentation
          </a>.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
