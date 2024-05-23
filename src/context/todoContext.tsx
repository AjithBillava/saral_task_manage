import { createContext, useEffect, useState } from "react";
import { intialValuesType, todoType } from "../utils/dataTypes";
import { fetchData } from "../utils/helpers";


const intialValues: intialValuesType = {
  completedTodoList: [
    {
      id: 0,
      userId: 0,
      todo: "",
      completed: false,
    },
  ],

  inCompletedTodoList: [
    {
      id: 0,
      userId: 0,
      todo: "",
      completed: false,
    },
  ],
  setCompletedTodoList: () => {},
  setInCompletedTodoList: () => {},
};

export const TodoContext = createContext(intialValues);

const TodoProvider = ({ children }: { children: JSX.Element }) => {
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const [completedTodoList, setCompletedTodoList] = useState<todoType[]>([]);
  const [inCompletedTodoList, setInCompletedTodoList] = useState<todoType[]>(
    []
  );
  
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      setTodoList(data.todos);
    };

    getData();
  }, []);

  useEffect(() => {
    const completeTodos = todoList?.filter((item) => item.completed);
    const inCompleteTodos = todoList?.filter((item) => !item.completed);
    
    setCompletedTodoList(completeTodos);
    setInCompletedTodoList(inCompleteTodos);
  }, [todoList]);


  return (
    <TodoContext.Provider
      value={{
        completedTodoList,
        inCompletedTodoList,
        setCompletedTodoList,
        setInCompletedTodoList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
