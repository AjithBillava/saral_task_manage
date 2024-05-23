// type Props = {}

import { useState } from "react";
import { addTodo } from "../../utils/helpers";

const AddTodo = ({columnType}:{columnType:string}) => {
  const [showTextInput, setShowTextInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddToClick = () => {
    setShowTextInput(true);
  };

  const handleInputTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputOnKeyDown =(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==='Enter'){
        const taskStatus = columnType === 'COMPLETED'
        addTodo(taskStatus,inputValue)
        setInputValue('')
    }
  }

  return (
    <div className="flex flex-col text-[#667085]">
      <button onClick={handleAddToClick} className="flex justify-between p-3">
        {" "}
        <span>Add to do</span> <span>+</span>{" "}
      </button>
      {showTextInput && (
        <input
          value={inputValue}
          onChange={(e) => handleInputTodoChange(e)}
          onKeyDown={(e)=>handleInputOnKeyDown(e)}
          className="mx-2"
          type="text"
        />
      )}
    </div>
  );
};

export default AddTodo;
