import { createContext, useEffect, useState } from "react";

import TaskService from "../services/task.service"

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect((e) => {
        TaskService().getAll().then(responseGetTasks).catch(errorGetTasks)
    }, [])

    const handlerTaskAddition = async (task) => {
        await TaskService().create(task).then(responseCreateTask).catch(errorCreateTask);
    }

    const handlerTaskDeletion = async (taskId) => {
        await TaskService().remove(taskId).then(res=> responseDeleteTask(taskId)).catch(errorDeleteTask);
    }

    const handlerTaskUpdate = async (taskUpdated) => {
        await TaskService().update(taskUpdated).then(res => responseUpdateTask(taskUpdated)).catch(errorUpdateTask);
    }

    const responseGetTasks = (response) => {
        setTasks(response);
    }

    const errorGetTasks = (error) => {
        console.log(error);
    }

    const responseCreateTask = (response) => {
        setTasks((prevState) => [...prevState, response]);
    }

    const errorCreateTask = (error) => {
        console.log(error);
    }

    const responseDeleteTask = (taskId) => {
        setTasks((prevState) => prevState.filter(task => task.id !== taskId));
    }

    const errorDeleteTask = (error) => {
        console.log(error);
    }

    const responseUpdateTask = (taskUpdated) => {
        setTasks((prevState) => prevState.map(task => 
            task.id === taskUpdated.id ? taskUpdated : task
        ));
    }

    const errorUpdateTask = (error) => {
        console.log(error);
    }

    return (
        <TaskContext.Provider 
            value={{
                tasks,
                handlerTaskAddition,
                handlerTaskDeletion,
                handlerTaskUpdate
            }}>
            { children }
        </TaskContext.Provider>
    );
}
 
export default TaskContext;