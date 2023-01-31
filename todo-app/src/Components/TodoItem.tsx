import React from 'react'
import { editData } from '../Api';
import { Todo } from '../Constants'
 
interface TodoItemProps extends Todo{
    handleUpdate : ()=>void;
    handleDelete : (id:number)=> void
}
const TodoItem = (prop:TodoItemProps) => {
  const {id, title,status, handleDelete,handleUpdate} = prop

  const handleClick=()=>{
      editData(id,!status).then(()=>handleUpdate()) 
  }
  return (
    <div>
      {title} {status? "completed": "pending"}
      <button onClick={handleClick}>toggle</button>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoItem
