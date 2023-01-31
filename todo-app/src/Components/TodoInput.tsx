import React, { useEffect, useRef, useState } from 'react'
import { addData } from '../Api'
import { Todo } from '../Constants'

interface TodoInputPropType{
  onAdd: (newtodo: Todo)=> void ;
}
const TodoInput = (prop:TodoInputPropType) => {
  const [todo, setTodo]= useState<string>("")
  const {onAdd}= prop
  
  const handleClick= async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    let res= await addData(todo)
    onAdd(res)
    setTodo("")
  }
  
  return (
    <div>
      <input  type="text" placeholder='Add Todo' value={todo} onChange={(e)=> setTodo(e.target.value)}/>
      <button onClick={(e)=>handleClick(e)} >Add Todo</button>
    </div>
  )
}

export default TodoInput
