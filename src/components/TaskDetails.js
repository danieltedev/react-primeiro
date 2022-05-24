import { useNavigate, useParams } from "react-router-dom";

import BtnTask from "./BtnTask";

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handlerBackButtonClick = () => {
        navigate(`/`);
    }
    
    return (
        <>
            <div className="back-button-container">
                <BtnTask onClick={handlerBackButtonClick}>Voltar</BtnTask>
            </div>
            <div className="task-details-container">
                <h2>{ params.taskTitle }</h2>
                <p>
                    If you find yourself doing this often, or if you use several classes conditionally
                    on the same element, you might find it useful to use a simple JavaScript library
                    for conditionally applying classnames together. The library is called Classnames
                    and it's a plain JavaScript library, so it works great with React and also other
                    JavaScript frameworks.
                </p>
            </div>
        </>
    );
}
 
export default TaskDetails;