import styles from './Header.module.css/'

import toDoLogo from '../assets/toDo-logo.svg'


export function Header() {
  return (
    <div className={styles.header}>
        <img src={toDoLogo} alt="App Logo" />
    </div>
  );
}