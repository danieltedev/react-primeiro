import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import TaskContext from '../context/task.context';

import './Task.css';

const Task = ({ task }) => {
    const navigate = useNavigate();
    const { handlerTaskUpdate, handlerTaskDeletion } = useContext(TaskContext);

    const handlerTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    }

    const changeCompleted = (task) => {
        task = {...task, completed: !task.completed};
        handlerTaskUpdate(task);
    }

    return (
        <div className={`task-container ${task.completed ? 'completed': ''}`}>
            <div className='task-title'
                onClick={() => changeCompleted(task)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='remove-task-button'
                    onClick={() => handlerTaskDeletion(task.id)}>
                    X
                </button>
                <button className='see-task-details-button'
                    onClick={handlerTaskDetailsClick}>
                    I
                </button>
            </div>
        </div>
    );
}

export default Task;