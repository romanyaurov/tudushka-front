import { ReactNode, useEffect, useState } from 'react';
import styles from './Layout.module.css';
import { useLocation, useOutlet } from 'react-router-dom';

type LayoutProps = {
  header: ReactNode;
  footer: ReactNode;
};

export function Layout({ header, footer }: LayoutProps) {
  const location = useLocation();
  const newOutlet = useOutlet();
  
  const [currentOutlet, setCurrentOutlet] = useState<ReactNode>(newOutlet);
  const [prevOutlet, setPrevOutlet] = useState<ReactNode | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (newOutlet !== currentOutlet) {
      setPrevOutlet(currentOutlet);
      setCurrentOutlet(newOutlet);
      setIsAnimating(true);

      setTimeout(() => {
        setPrevOutlet(null);
        setIsAnimating(false);
      }, 500);
    }
  }, [location.pathname]);

  return (
    <div className={styles.root}>
      {header}
      <div className={styles.container}>
        {prevOutlet && (
          <div className={`${styles.content} ${styles.slideOut}`}>
            {prevOutlet}
          </div>
        )}
        <div className={`${styles.content} ${isAnimating ? styles.slideIn : ''}`}>
          {currentOutlet}
        </div>
      </div>
      {footer}
    </div>
  );
}
