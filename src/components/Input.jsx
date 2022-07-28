import styles from './Input.module.css'
import { PlusCircle} from 'phosphor-react'
import { useState } from 'react';


export function Input({onCreateNewTask}) {
  const [taskText, setTaskText] = useState('')
  function handleTaskTextChange(){
    setTaskText(event.target.value)
  }

  function handleCreateNewTask(){
    onCreateNewTask(taskText)
    setTaskText('')
  }


  return (
      <div className={styles.addTaskInput}>
        <input 
          type="text" 
          placeholder='Add a new task here...' 
          value={taskText}  
          onChange={handleTaskTextChange}
          required
        />
        <a onClick={handleCreateNewTask} href="#">
          Add
          <PlusCircle size={16}  />
        </a>
      </div>
  );
}



