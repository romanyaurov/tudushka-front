import { useNavigate } from 'react-router-dom';
import { LuListTodo } from 'react-icons/lu';
import { LuListPlus } from 'react-icons/lu';
import { LuUser } from 'react-icons/lu';
import { Button } from '@tudushka/shared/ui/Button';
import styles from './Footer.module.css';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.actions}>
        <div className={styles.actionContainer}>
          <Button
            content={<LuListPlus />}
            fullWidth
            onClick={() => {
              navigate('/add');
            }}
          />
        </div>
        <div className={styles.actionContainer}>
          <Button
            content={<LuListTodo />}
            fullWidth
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
        <div className={styles.actionContainer}>
          <Button
            content={<LuUser />}
            fullWidth
            onClick={() => {
              navigate('/profile');
            }}
          />
        </div>
      </div>
    </footer>
  );
};
