import { ITask } from "../Interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>Task: {task.taskName}</span>
                <span>In {task.deadLine} days</span>
            </div>
            <button onClick={() => {completeTask(task.taskName)}}>
                Done
            </button>
        </div>
    )
};

export default TodoTask;