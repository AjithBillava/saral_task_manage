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
