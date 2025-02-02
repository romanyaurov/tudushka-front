import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({checked, onChange}: CheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <input
        className={styles.checkboxCommonInput}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkboxCrossSymbol}>&times;</span>
    </label>
  );
};
