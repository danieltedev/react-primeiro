import './BtnTask.css'

const BtnTask = ({ children, onClick }) => {
    return <button onClick={onClick} className="task-button">{ children }</button>;
}

export default BtnTask;