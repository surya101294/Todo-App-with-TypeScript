import React, { useEffect, useState } from 'react'
import { deleteData, getData } from '../Api'
import { Todo } from '../Constants'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { Typography } from '@mui/material'
import Loader from './Loader'

const TodoApp = () => {
    const [todos,setTodos]= useState<Todo[]>([])
  const [change,setChange] = useState<boolean>(false)
    const onAdd=(newTodo: Todo)=>{
        setTodos([...todos, newTodo])
    }
    useEffect(()=>{
        getData().then((res)=> setTodos(res))
    },[change])
    const handleUpdate=()=>{
        setChange((prev)=> !prev)
    }
    const handleDelete=(id:number)=>{
        deleteData(id).then(()=> getData()).then((res)=>setTodos(res))
    }

    return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <Typography variant="h3" component="h2">
  Todo-Application
</Typography>
<br />
      <TodoInput onAdd={onAdd}/>
      <br />
        {todos.length>0 ? todos.map((el)=>{
            return <TodoItem key= {el.id} 
            {...el} handleUpdate= {handleUpdate} handleDelete={handleDelete} />
        })
        :
      <Loader/>
      }
    </div>
  )
}

export default TodoApp
