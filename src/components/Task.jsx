import styles from './Task.module.css/'
import { Trash, CheckCircle, Circle} from 'phosphor-react'



export function Task(props) {
  function handleDeleteTask(){
    props.onDeleteTask(props.id)
  }

  function handleSwitchChek() {
    props.onToggleCheck(props.id)
  }
  return (
    <div key={props.id} className={styles.taskListed }>
      <a onClick={handleSwitchChek} href="#">{props.isChecked ? <CheckCircle className={styles.checkCircle} size={24}/> :<Circle className={styles.circle} size={24}/> }</a>
      <span className={props.isChecked ? styles.checked : styles.unchecked}> {props.title} </span>
      <a onClick={handleDeleteTask} href="#"><Trash className={styles.trash} size={24}/></a>
    </div>
  )

    

}