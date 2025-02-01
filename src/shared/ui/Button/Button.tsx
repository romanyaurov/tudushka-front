import { ReactNode, useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  content?: string | ReactNode;
  fullWidth?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  content = '',
  fullWidth = false,
  active = false,
  disabled = false,
  onClick = () => {console.log('click!')},
}: ButtonProps) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
    if (onClick) onClick();
    setTimeout(() => {
      setIsClick(false);
    }, 150);
  };

  return (
    <div className={`${styles.buttonContainer} ${fullWidth ? styles.fullWidth : ''}`}>
      <button 
        type="button"
        onClick={handleClick}
        className={`${styles.button} ${active ? styles.active : ''} ${isClick ? styles.click : ''} ${typeof content !== 'string' ? styles.contentInside : ''}`}
        disabled={disabled}
      >
        {typeof content === 'string' ? <span>{content}</span> : content}
      </button>
    </div>
  );
};