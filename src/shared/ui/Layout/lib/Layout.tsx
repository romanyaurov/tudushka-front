import { ReactNode, useEffect, useState } from 'react';
import styles from './Layout.module.css';
import { Outlet, useLocation } from 'react-router-dom';

type LayoutProps = {
  header: ReactNode;
  footer: ReactNode;
};

export function Layout({ header, footer }: LayoutProps) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [prevPath, setPrevPath] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setIsAnimating(true);
      setPrevPath(currentPath);

      setTimeout(() => {
        setCurrentPath(location.pathname);
        setIsAnimating(false);
      }, 500);
    }
  }, [location.pathname]);

  return (
    <div className={styles.root}>
      {header}
      <div className={styles.container}>
        {prevPath && isAnimating && (
          <div className={`${styles.content} ${styles.slideOut}`}>
            <Outlet key={prevPath} />
          </div>
        )}
        <div className={`${styles.content} ${isAnimating ? styles.slideIn : ''}`}>
          <Outlet key={currentPath} />
        </div>
      </div>
      {footer}
    </div>
  );
}
