// type Props = {}

import { useContext, useState } from "react";
import { addTodo } from "../../utils/helpers";
import { TodoContext } from "../../context/todoContext";

const AddTodo = ({ columnType }: { columnType: string }) => {
  const [showTextInput, setShowTextInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  const {
    inCompletedTodoList,
    completedTodoList,
    setCompletedTodoList,
    setInCompletedTodoList,
  } = useContext(TodoContext);

  const handleAddToClick = () => {
    setShowTextInput(true);
  };

  const handleInputTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleInputOnKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      const taskStatus = columnType === "COMPLETE";
      const todoResponse = await addTodo(taskStatus, inputValue);

      if (columnType === "COMPLETE") {
        const latestCompletedTodos = [...completedTodoList, todoResponse];

        setCompletedTodoList(latestCompletedTodos);
      } else {
        const latestIncompleteTodos = [...inCompletedTodoList, todoResponse];
        setInCompletedTodoList(latestIncompleteTodos);
      }

      setInputValue("");
      setShowTextInput(false);
    }
  };

  return (
    <div className="flex flex-col text-[#667085] dark:text-[#e3e3e3]">
      {!showTextInput && (
        <button
          onClick={handleAddToClick}
          className="flex gap-4 items-center dark:hover:bg-gray-800 hover:bg-gray-200 px-3 mt-5  py-2 rounded-lg"
        >
          {" "}
          <span>Add to do</span> <span>+</span>{" "}
        </button>
      )}
      {showTextInput && (
        <input
          autoFocus
          value={inputValue}
          onBlur={()=>setShowTextInput(false)}
          onChange={(e) => handleInputTodoChange(e)}
          onKeyDown={(e) => handleInputOnKeyDown(e)}
          className="px-3 mt-5 w-60 py-2 rounded-lg dark:bg-[#1e1f20]"
          type="text"
        />
      )}
    </div>
  );
};

export default AddTodo;
