import { Task } from "../../types";
import Checkbox from "@mui/material/Checkbox";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
    task: Task;
    toggleTaskCompletion: (id: string) => void;
    removeTask: (id: string) => void;
};

export function TodoItem({
    task,
    toggleTaskCompletion,
    removeTask
}: TodoItemProps) {
    return (
        <li
            className={styles["todo-item"]}
            style={{
                textDecoration: task.completed ? "line-through" : "none"
            }}
        >
            <span className={styles["name"]}>{task.name}</span>
            <div className={styles["controls"]}>
                <Checkbox
                    color="secondary"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    size="medium"
                    style={{
                        marginRight: "10px"
                    }}
                />
                <button
                    className={styles["remove-button"]}
                    onClick={() => removeTask(task.id)}
                >
                    Remove Task
                </button>
            </div>
        </li>
    );
}
