
import { useContext} from 'react'
import './App.css'
// import TodoCard from './components/todoCard'
// import { fetchData } from './utils/helpers'
import TaskStatusColumn from './components/taskStatusColumn'
// import { todoType } from './utils/dataTypes'
import { TodoContext } from './context/todoContext'

function App() {
  
  const {inCompletedTodoList,completedTodoList} = useContext(TodoContext)

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
