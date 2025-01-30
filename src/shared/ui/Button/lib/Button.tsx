import { useState } from 'react';
import './Button.css';

interface Props {
  text: string;
  fullWidth?: boolean;
  disabled?: boolean;
  small?: boolean;
  onClick?: () => void;
}

export const Button = ({
  text,
  disabled = false,
  fullWidth = false,
  small = false,
  onClick,
}: Props) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
    onClick!();
    setTimeout(() => {
      setIsClick(false);
    }, 200);
  };

  return (
    <div className={`button-container ${fullWidth ? 'full-width' : ''}`}>
      <button 
        type="button"
        onClick={handleClick}
        className={`button ${small ? 'small' : ''} ${isClick ? 'click' : ''}`}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};
