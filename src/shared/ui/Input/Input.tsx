import { ReactNode, useEffect, useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
  icon?: ReactNode;
  onChange?: (value: string) => void;
}

export const Input = ({placeholder, icon, onChange}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    onChange && onChange(inputValue);
  }, [inputValue])

  return (
    <div className={styles.input}>
      <label className={styles.inputLabel}>
        {icon && (<span className={styles.inputIcon}>{icon}</span>)}
        <input
          className={styles.inputField}
          placeholder={placeholder}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
    </div>
  );
};
