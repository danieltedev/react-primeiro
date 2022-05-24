import { useContext, useState } from 'react';

import TaskContext from '../context/task.context';
import BtnTask from './BtnTask';

import './AddTask.css';

const AddTask = () => {
    const [inputData, setInputData] = useState('');
    const { handlerTaskAddition } = useContext(TaskContext);

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handlerAddTaskClick = () => {
        const task = {
            title: inputData,
            completed: false,
        }
        handlerTaskAddition(task);
        setInputData('');
    }

    return (
        <div className="add-task-container">
            <input onChange={handleInputChange}
                value={inputData}
                className="task-input"
                type='text' />
            <div className='task-button-container'>
                <BtnTask onClick={handlerAddTaskClick}>Adicionar</BtnTask>
            </div>
        </div>
     );
}
 
export default AddTask;