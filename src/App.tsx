
import { useEffect, useState } from 'react'
import './App.css'
// import TodoCard from './components/todoCard'
import { fetchData } from './utils/helpers'
import TaskStatusColumn from './components/taskStatusColumn'
import { todoType } from './utils/dataTypes'

function App() {
  const [todoList,setTodoList] = useState<todoType[]>([])

  const [completedTodoList,setCompletedTodoList] =  useState<todoType[]>([])
  const [inCompletedTodoList,setInCompletedTodoList] =  useState<todoType[]>([])
  useEffect(()=>{
    const getData = async ()=>{
      const data = await fetchData()

      setTodoList(data.todos)
      console.log(data)
    }

    getData()
  },[])

  useEffect(()=>{
    const completeTodos = todoList?.filter(item=>item.completed)
    const inCompleteTodos = todoList?.filter(item=>!item.completed)
    console.log("🚀 ~ useEffect ~ completeTodos:", completeTodos)

    setCompletedTodoList(completeTodos)
    setInCompletedTodoList(inCompleteTodos)
    
  },[todoList])

  console.log(todoList)
  return (
    <>
      <div className='flex gap-9 p-8 bg-[#F2F4F7] h-screen font-karla-font'>
        <TaskStatusColumn title='incompelte' taskList={inCompletedTodoList} />
        <TaskStatusColumn title='complete' taskList={completedTodoList}/>
      </div>
    </>
  )
}

export default App
