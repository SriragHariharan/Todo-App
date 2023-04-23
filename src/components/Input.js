//Here we will setup an input form and get the task from the user

import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Input({todo, setTodo, tasks, setTasks}) {

   //function used to add each todo to an array of
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTasks([...tasks, {id:Date.now(), name:todo}]);
        setTodo("");
    } 

  return (
    <div className='d-flex align-items-center justify-content-center p-5'>
        <Form.Group className="p-1" controlId="formBasicEmail">
            <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="email" placeholder="Enter task" />
        </Form.Group>
        <Button onClick={handleSubmit} variant="light" type="submit">
        ➕
      </Button>
    </div>
  )
}

export default Input