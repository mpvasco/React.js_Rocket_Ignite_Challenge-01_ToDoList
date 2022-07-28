import styles from './Counter.module.css'

export function Counter({total, completed}) {
  return (
      <div className={styles.taskCounterBox}>
        <div className={styles.taskCounterBoxCriadas}>
          <strong>Created tasks</strong>
          <span>{total}</span>
        </div>
        <div className={styles.taskCounterBoxConcluidas}>
          <strong>Completed tasks</strong>
          <span>{completed} out of {total}</span>
        </div>
      </div>
  );
}