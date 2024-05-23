import { createContext, useEffect, useState } from "react";
import { todoType } from "../utils/dataTypes";
import { fetchData } from "../utils/helpers";

export type intialValuesType = {
  completedTodoList: todoType[];
  inCompletedTodoList: todoType[];
  setCompletedTodoList: React.Dispatch<React.SetStateAction<todoType[]>>;
  setInCompletedTodoList: React.Dispatch<React.SetStateAction<todoType[]>>;
};

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
    //   console.log(data);
    };

    getData();
  }, []);

  useEffect(() => {
    const completeTodos = todoList?.filter((item) => item.completed);
    const inCompleteTodos = todoList?.filter((item) => !item.completed);
    // console.log("🚀 ~ useEffect ~ completeTodos:", completeTodos);

    setCompletedTodoList(completeTodos);
    setInCompletedTodoList(inCompleteTodos);
  }, [todoList]);

  console.log(todoList);

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
