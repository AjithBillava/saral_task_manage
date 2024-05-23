import { todoType } from "../../utils/dataTypes"

const TodoCard = ({todo,id}:todoType) => {


    const handleDrag = (e:React.DragEvent<HTMLDivElement>) =>{
        e.dataTransfer.setData('id',`${id}_${todo}`.toString())
    }
  return (
    <div draggable onDragStart={(e)=>handleDrag(e)} className="flex flex-wrap bg-[#FCFCFD] dark:bg-[#1E1F20] w-60 p-3 rounded-lg drop-shadow font-bold text-[#1D2939] dark:text-gray-100 ">
        {todo}
    </div>
  )
}

export default TodoCard