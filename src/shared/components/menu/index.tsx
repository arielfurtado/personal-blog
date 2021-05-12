import Link from 'next/link';
import styles from './styles.module.scss';
type Props = {
  menuActive?: string;
};

const menu = ({ menuActive = '' }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <h1>Lucio Ariel</h1>
        </Link>
        <div className={styles.menuWrap}>
          <nav className={styles.mainMenu}>
            <Link href="/about">
              <a
                className={`${styles.menuLink} ${
                  menuActive === 'about' ? styles.active : ''
                }`}
              >
                Olá
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={`${styles.menuLink} ${
                  menuActive === 'blog' ? styles.active : ''
                }`}
              >
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`${styles.menuLink} ${
                  menuActive === 'contact' ? styles.active : ''
                }`}
              >
                Contato
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default menu;
