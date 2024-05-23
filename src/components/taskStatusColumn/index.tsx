import { taskStatusColumnProps } from "../../utils/dataTypes";
import AddTodo from "../addTodo";
import TodoCard from "../todoCard";

const TaskStatusColumn = ({
  title = "incomplete",
  taskList,
}: taskStatusColumnProps) => {
  return (
    <div className="flex flex-col text-[#667085]  gap-8">
      <div className="font-bold text-[15px]">{title.toUpperCase()}</div>
      <div className="flex flex-col gap-6">
        {taskList.map((item) => (
          <TodoCard key={item.id} {...item} />
        ))}
      </div>
      {/* <AddTodo /> */}
    </div>
  );
};

export default TaskStatusColumn;
