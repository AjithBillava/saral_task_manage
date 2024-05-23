export type newTodoType = {
  completed: boolean;
  todo: string;
  userId: number;
};

export interface todoType extends newTodoType {
  id: number;
}

export type taskStatusColumnProps = {
  title: string;
  taskList: todoType[];
};

export type fetchedDataType = {
  limit: number;
  skip: number;
  todos: todoType[];
  total: number;
};


export type intialValuesType = {
  completedTodoList: todoType[];
  inCompletedTodoList: todoType[];
  setCompletedTodoList: React.Dispatch<React.SetStateAction<todoType[]>>;
  setInCompletedTodoList: React.Dispatch<React.SetStateAction<todoType[]>>;
};