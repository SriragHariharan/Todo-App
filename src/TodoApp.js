import React, { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import CompletedList from './components/CompletedList'


function TodoApp() {
    const [todo, setTodo] = useState('')
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
  return (
    <div>
        <Header/>
        <Input todo={todo} setTodo={setTodo} tasks={tasks} setTasks={setTasks}/>
        <List tasks={tasks} setTasks={setTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />
        <CompletedList completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />
    </div>
  )
}

export default TodoApp