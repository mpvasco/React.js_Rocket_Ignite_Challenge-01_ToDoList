import styles from './EmptyList.module.css'
import { ClipboardText} from 'phosphor-react'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
    <p><ClipboardText size={56}/></p>
    <strong>Você ainda não tem tarefas cadastradas</strong>
    <p>Crie tarefas e organize seus itens a fazer</p>
  </div>
  );
}