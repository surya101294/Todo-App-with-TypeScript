import axios, {Axios, AxiosResponse} from "axios"
import { Todo } from "./Constants"

export const getData= async()=>{
    let res : AxiosResponse<Todo[]>  = await axios.get(`http://localhost:8080/todos`)
    return res.data
}

export const addData= async(title:string)=>{
    const newTodo={
        title, status:false
    }
    let res :AxiosResponse<Todo> = await axios.post(`http://localhost:8080/todos`, newTodo)
    return res.data
}
export const editData= async(id:number, status:boolean)=>{
    let res: AxiosResponse<Todo> = await axios.patch(`http://localhost:8080/todos/${id}`, {status})
    return res.data
}

export const deleteData=async(id:number)=>{
    let res: AxiosResponse<Todo>= await axios.delete(`http://localhost:8080/todos/${id}`)
    return res.data
}

