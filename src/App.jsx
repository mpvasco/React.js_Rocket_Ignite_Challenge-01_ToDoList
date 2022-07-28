import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import './App.css'
import { Task } from './components/Task'
import { Counter } from './components/Counter'
import { EmptyList } from './components/EmptyList'
import {v4 as uuidv4} from 'uuid'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "text goes here 1text t goes here 1text goes here 1xt goes here 1text goes here 1",
      isChecked: true
    },
    {
      id:uuidv4(),
      title: "text goes here 2",
      isChecked: false
    },
    {
      id: uuidv4(),
      title: "text goes here 3",
      isChecked: false
    },
    {
      id: uuidv4(),
      title: "text goes here 4",
      isChecked: true
    },
  ])
  const numbTasks = tasks.length
  const temLista = numbTasks > 0
  const numbTasksCompleted = tasks.filter( x => x.isChecked === true).length


  function CreateNewTask(title) {
    const y = {
      id: uuidv4(),
      title: `${title}`,
      isChecked: false
    }
    setTasks([...tasks, y])
  }

  function DeleteTask(id) {
    const remainList = tasks.filter( x => x.id !== id)
    setTasks(remainList)
  }

  function ToggleCheck(id) {
    const updated = tasks.map( x => {
      if (x.id === id) {
        x.isChecked = !x.isChecked
    } 
    return x
  })
    setTasks(updated)
    opa()
  }

  function opa(){
    const tasksOpened = tasks.filter( x => {
      x.isChecked === true
      return x
  })
    const tasksClosed = tasks.filter( x => {
      x.isChecked === false
      return x
  })
  setTasks(tasksOpened)
  }

  
//   let crescent = tasks.map(x => {
//     return object.name
// }).sort()

  return (
    <div className="App">
      <Header />
      <Input onCreateNewTask={CreateNewTask}/>
      <Counter total={numbTasks} completed={numbTasksCompleted}/>
      {
      temLista ? 
      tasks.map( task => {
        return ( 
          <Task 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            isChecked={task.isChecked}
            onDeleteTask={DeleteTask}
            onToggleCheck={ToggleCheck}
          /> 
          )
      })
      : 
      <EmptyList />
      }
      
    </div>
  )
}

export default App
