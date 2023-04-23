import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CompletedList({completedTasks, setCompletedTasks}) {
    let handleDelete = (id) => {
        setCompletedTasks(completedTasks.filter((item)=> (item.id !== id)))
    }
  return (
    <>
    <h3 className="text-center mt-4">Completed tasks !</h3>
    {
        completedTasks.map((item)=> (
            <div className='d-flex align-items-center justify-content-center p-1' key={item.id}>
                <Form.Group className="p-1" controlId="formBasicEmail">
                    <input value={item.name} readOnly/>
                </Form.Group>
                <Button onClick={()=>handleDelete(item.id)} variant="light">
                🗑️
              </Button>
            </div>
        ))
    }
    </>
  )
}

export default CompletedList