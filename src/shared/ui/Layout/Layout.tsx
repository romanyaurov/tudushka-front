import { ReactNode, useEffect, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import styles from './Layout.module.css';

type LayoutProps = {
  header: ReactNode;
  footer: ReactNode;
};

enum AnimationDirections {
  FROM_RIGHT_TO_LEFT = 'fromRightToLeft',
  FROM_LEFT_TO_RIGHT = 'fromLeftToRight',
}

export function Layout({ header, footer }: LayoutProps) {
  const routes = ['/add', '/', '/profile'];

  const location = useLocation();
  const newOutlet = useOutlet();

  const [currentOutlet, setCurrentOutlet] = useState<ReactNode>(newOutlet);
  const [prevOutlet, setPrevOutlet] = useState<ReactNode | null>(null);
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);
  const [prevPath, setPrevPath] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const defineAnimationDirection = () => {
    const prevPathIndex = routes.findIndex((path) => path === prevPath);
    const currentPathIndex = routes.findIndex((path) => path === currentPath);

    if (prevPathIndex < currentPathIndex) {
      return AnimationDirections.FROM_RIGHT_TO_LEFT;
    } else {
      return AnimationDirections.FROM_LEFT_TO_RIGHT;
    }
  }

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setPrevOutlet(currentOutlet);
      setPrevPath(currentPath);
      setCurrentOutlet(newOutlet);
      setCurrentPath(location.pathname);
      setIsAnimating(true);

      const timeout = setTimeout(() => {
        setPrevOutlet(null);
        setPrevPath(null);
        setIsAnimating(false);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [location.pathname]);

  return (
    <div className={styles.root}>
      {header}
      <div className={styles.container}>
        {prevOutlet && isAnimating && (
          <div className={`${styles.content} ${styles.slideOut} ${styles[defineAnimationDirection()]}`}>
            {prevOutlet}
          </div>
        )}
        <div
          className={`${styles.content} ${isAnimating ? styles.slideIn : ''} ${isAnimating ? styles[defineAnimationDirection()] : ''}`}
        >
          {currentOutlet}
        </div>
      </div>
      {footer}
    </div>
  );
}
