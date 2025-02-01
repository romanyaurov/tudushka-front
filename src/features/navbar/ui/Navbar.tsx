import { useNavigate } from 'react-router-dom';
import { LuListPlus, LuListTodo, LuUser } from 'react-icons/lu';
import { Button } from '@tudushka/shared/ui';
import styles from './Navbar.module.css';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarItems}>
        <li className={styles.navbarItem}>
          <Button
            content={<LuListPlus />}
            fullWidth
            onClick={() => {
              navigate('/add');
            }}
          />
        </li>
        <li className={styles.navbarItem}>
          <Button
            content={<LuListTodo />}
            fullWidth
            onClick={() => {
              navigate('/');
            }}
          />
        </li>
        <li className={styles.navbarItem}>
          <Button
            content={<LuUser />}
            fullWidth
            onClick={() => {
              navigate('/profile');
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
