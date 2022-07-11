import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Firebase from './firebase'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day:  'March 13th at 5:38pm',
            reminder: true,
         },
         {
            id: 2,
            text: 'JS practice',
            day:  'July 19th at 3:00 am',
            reminder: true,
         },
         {
            id: 3,
            text: 'Shopping',
            day:  'August 25th at 1:50pm',
            reminder: false,
         },
        ])

//Add Task
const addTask = (task) => {
  const id = (Math.floor(Math.random() * 10000) + 1)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  localStorage.setItem('todolist', JSON.stringify([...tasks, newTask]))
}

//delete tasks
const deleteTask = (id) =>{
  const newTasks = tasks.filter((task) => task.id !== id)
  setTasks(newTasks)
  localStorage.setItem('todolist', JSON.stringify(newTasks))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks
    (tasks.map((task)=> task.id === id
    ? {...task, reminder: !task.reminder} : task)
    )
}

console.log(localStorage.getItem('todolist'))
  return (
    <div className='container'>
      <Header onAdd = {() => setShowAddTask (!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}/> 
        ) : (
          "There are no Tasks left to show "
          )}
    </div>
   
  );
}

export default App;
