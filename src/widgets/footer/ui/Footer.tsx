import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Link to="/">Main Page</Link> | <Link to="/about">About Page</Link>
    </footer>
  );
};
