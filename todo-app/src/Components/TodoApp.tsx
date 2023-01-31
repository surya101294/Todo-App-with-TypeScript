import React, { useEffect, useState } from 'react'
import { deleteData, editData, getData } from '../Api'
import { Todo } from '../Constants'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

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
    <div>
      <TodoInput onAdd={onAdd}/>
        {todos.length>0 && todos.map((el)=>{
            return <TodoItem key= {el.id} 
            {...el} handleUpdate= {handleUpdate} handleDelete={handleDelete} />
        })}
    </div>
  )
}

export default TodoApp
