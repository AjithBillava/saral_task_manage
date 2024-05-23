
import { useContext} from 'react'
import './App.css'
// import TodoCard from './components/todoCard'
// import { fetchData } from './utils/helpers'
import TaskStatusColumn from './components/taskStatusColumn'
// import { todoType } from './utils/dataTypes'
import { TodoContext } from './context/todoContext'
import SideBar from './components/sideBar'

function App() {
  
  const {inCompletedTodoList,completedTodoList} = useContext(TodoContext)

  return (
    <div className='flex '>
      <SideBar/>
      <div className='flex gap-9 p-20 bg-[#F2F4F7] dark:bg-[#131314] dark:text-[#e3e3e3] h-screen w-full font-karla-font'>
        <TaskStatusColumn title='incomplete' taskList={inCompletedTodoList} />
        <TaskStatusColumn title='complete' taskList={completedTodoList}/>
      </div>
    </div>
  )
}

export default App
