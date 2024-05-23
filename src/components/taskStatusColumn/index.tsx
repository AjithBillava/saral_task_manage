import { useContext} from "react";
import { taskStatusColumnProps } from "../../utils/dataTypes";
import AddTodo from "../addTodo";
import TodoCard from "../todoCard";
import { TodoContext } from "../../context/todoContext";
const TaskStatusColumn = ({
  title = "incomplete",
  taskList,
}: taskStatusColumnProps) => {
  const {
    inCompletedTodoList,
    completedTodoList,
    setCompletedTodoList,
    setInCompletedTodoList,
  } = useContext(TodoContext);
  
  const handleOnDrop = async (e: React.DragEvent<HTMLDivElement>, title: string) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    

    if (title === "incomplete") {
      const task = completedTodoList.find(
        (task) => `${task.id}_${task.todo}` === id
      );
      const latestCompletetasks = completedTodoList.filter(
        (item) => `${item.id}_${item.todo}` !== `${task?.id}_${task?.todo}`
      );

      

      task && setCompletedTodoList([...latestCompletetasks]);
      task &&
        setInCompletedTodoList([
          ...inCompletedTodoList,
          { ...task, completed: false },
        ]);
    } else {
      const task = inCompletedTodoList.find(
        (task) => `${task.id}_${task.todo}` === id
      );
      

      const latestIncompletetasks = inCompletedTodoList.filter(
        (item) =>`${item.id}_${item.todo}` !== `${task?.id}_${task?.todo}`
      );

      
      task && setInCompletedTodoList([...latestIncompletetasks]);

      task &&
        setCompletedTodoList([
          ...completedTodoList,
          { ...task, completed: true },
        ]);
    }
  };

  return (
    <div
      onDrop={(e) => handleOnDrop(e, title)}
      onDragOver={(e) => e.preventDefault()}
      className="flex flex-col w-64 text-[#667085] dark:text-[#e3e3e3]"
    >
      <div className="font-bold text-[15px] mb-8">{title.toUpperCase()}</div>
      <div className="flex flex-col gap-6">
        {taskList.map((item) => (
          <TodoCard key={`${item.id}_${item.todo}`} {...item} />
        ))}
      </div>
      <AddTodo columnType={title.toUpperCase()} />
    </div>
  );
};

export default TaskStatusColumn;
