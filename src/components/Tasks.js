import { useContext } from "react";
import TaskContext from "../context/task.context";
import Task from "./Task";

function Tasks() {
    const { tasks } = useContext(TaskContext);

    return (
        <>
            {
                tasks.map( task => 
                    <Task key={task.id}
                        task={task} />
                )
            }
        </>
    );
}

export default Tasks;