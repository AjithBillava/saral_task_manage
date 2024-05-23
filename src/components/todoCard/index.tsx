import { todoType } from "../../utils/dataTypes"

const TodoCard = ({todo}:todoType) => {
  return (
    <div draggable className="flex flex-wrap bg-[#FCFCFD] w-60 p-3 rounded-lg drop-shadow font-bold text-[#1D2939]  ">
        {todo}
    </div>
  )
}

export default TodoCard