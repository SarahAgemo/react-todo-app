import React, {useState, useEffect} from 'react';
import "./App.css"
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from './assets/arrow1.png';
import progressIcon from './assets/star.png';
import completeIcon from './assets/tick.png';

const oldTasks = localStorage.getItem('tasks');
console.log(oldTasks);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleDelete = (taskIndex) => {
     const newTasks = tasks.filter((task, index) => index !== taskIndex)
     setTasks(newTasks)
  }
  return (
    <div className='app'>     
      <TaskForm setTasks={setTasks} />
      <main className='app_main'>
        <TaskColumn 
            title="To do" 
            icon={todoIcon} 
            tasks={tasks}
            status="todo"            
            handleDelete={handleDelete}
        />
        <TaskColumn 
            title="In progress" 
            icon={progressIcon} 
            tasks={tasks}
            status="doing" 
            handleDelete={handleDelete}
        />
        <TaskColumn 
            title="Completed" 
            icon={completeIcon} 
            tasks={tasks}
            status="done" 
            handleDelete={handleDelete}
        />
       
      </main>
    </div>
  )
}

export default App
