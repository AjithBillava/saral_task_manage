import axios from "axios";
import { fetchedDataType, newTodoType, todoType } from "./dataTypes";

const get_url = "https://dummyjson.com/todos/user/1";

export const fetchData = async () => {
  const { data } = await axios.get<fetchedDataType>(get_url);

  return data;
};


export const addTodo = async (taskStatus:boolean,todo:string)=>{
    const bodyData:newTodoType = {
        completed:taskStatus,
        todo:todo,
        userId:1
    }

    const {data} = await axios.post<todoType>('https://dummyjson.com/todos/add',bodyData)
    return data
    
}

export const updateTodoStatus = async(taskStatus:boolean,id:string|undefined) =>{
    
    const {data} = await axios.put<todoType>(`https://dummyjson.com/todos/${id}`,{completed:taskStatus})

    return data
}