import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


// className='align-items-center justify-content-center'

function List({tasks, setTasks, completedTasks, setCompletedTasks}) {
    let handleComplete = (id) => {
        let tasksArray = tasks.filter((item)=> (item.id !== id));
        let completedItem = tasks.filter((item)=> (item.id === id)); //this returns an array and need to be unpacked
        //console.log({id:completedItem[0].id, name:completedItem[0].name});
        setTasks(tasksArray)
        setCompletedTasks([...completedTasks, {id:completedItem[0].id, name:completedItem[0].name}])
    }
    //console.log(completedTasks);
  return (
    <>
        <h3 className="text-center mt-4">Pending Tasks</h3>
        {
            tasks.map((item) => (
                <div className='d-flex align-items-center justify-content-center p-1' key={item.id}>
                <Form.Group className="p-1" controlId="formBasicEmail">
                    <input value={  item.name} readOnly/>
                </Form.Group>
                <Button onClick={()=>handleComplete(item.id)} variant="light">
                ✔️
              </Button>
            </div>
                )
            )
        }
        <br></br>
    </>
  )
  }

//   <div key={item.id}>
//                         <input type="text" value={item.name} />
//                         <input onClick={()=>handleDelete(item.id)} value="Done" type="submit" />
//                     </div>

export default List