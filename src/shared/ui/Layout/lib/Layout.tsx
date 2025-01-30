import { ReactNode } from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  header: ReactNode;
  footer: ReactNode;
};

export function Layout({ header, footer }: LayoutProps) {
  return (
    <div className={styles.root}>
      {header}
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      {footer}
    </div>
  );
}
