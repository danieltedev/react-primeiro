import Header from "../utils/header";

const { REACT_APP_URL_API } = process.env;

const TaskService = () => {

    const url = `${REACT_APP_URL_API}task`;

    const toJson = (response) => {
        return response.json();
    }

    const getAll = () => {
        return fetch(url, Header().get()).then(toJson);
    }

    const create = (task) => {
        return fetch(url, Header().post(task)).then(toJson);
    }

    const update = (task) => {
        return fetch(`${url}/${task.id}`, Header().put(task)).then(toJson)
    }

    const remove = (id) => {
        return fetch(`${url}/${id}`, Header().remove()).then(toJson)
    }

    return Object.freeze({
        getAll,
        create,
        update,
        remove
    })
}

export default TaskService;