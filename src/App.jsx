import React from 'react';
import "./App.css"
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from './assets/arrow1.png';
import progressIcon from './assets/star.png';
import completeIcon from './assets/tick.png';

function App() {
  return (
    <div className='app'>
      
      <TaskForm/>
      <main className='app_main'>
        <TaskColumn title="To do" icon={todoIcon}  />
        <TaskColumn title="In progress" icon={progressIcon}  />
        <TaskColumn title="Completed" icon={completeIcon}  />
       
      </main>
    </div>
  )
}

export default App
