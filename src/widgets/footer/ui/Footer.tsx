import styles from './Footer.module.css';
import { Navbar } from '@tudushka/features/navbar';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Navbar />
    </footer>
  );
};
