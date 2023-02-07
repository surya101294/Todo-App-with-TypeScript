import React, {  useRef, useState } from 'react'
import { addData } from '../Api'
import { Todo } from '../Constants'
import AddIcon from '@mui/icons-material/Add';
import { Button, Fab, TextField } from '@mui/material';

interface TodoInputPropType{
  onAdd: (newtodo: Todo)=> void ;
}
const TodoInput = (prop:TodoInputPropType) => {
  const [todo, setTodo]= useState<string>("")
  const [error, setError]= useState<string>("")
  const {onAdd}= prop
  const inputRef= React.useRef<HTMLInputElement | null>(null)
  
  const handleClick= async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    let res= await addData(todo)
    onAdd(res)
    setTodo("")
    inputRef.current?.focus()
    if(inputRef.current?.value ===""){
      return setError("field is Mendatory")
    }
    setError("")
  }
  
  return (
    <div>
      {/* <input  type="text" placeholder='Add Todo' value={todo} onChange={(e)=> setTodo(e.target.value)}/> */}
      <TextField ref={inputRef} id="filled-basic" label="Add Todo" variant="filled" value={todo} onChange={(e)=> setTodo(e.target.value)} />
      <Button onClick={(e)=>handleClick(e)} >
      <Fab size="small" color="primary" >
        <AddIcon />
      </Fab>
      </Button>
    </div>
  )
}

export default TodoInput
