import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import './App.css';

function App() {

  return (
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/'
              exact
              element={
                <>
                  { <AddTask /> }
                  { <Tasks /> }
                </>
              } />
            <Route path='/:taskTitle'
              exact
              element={<TaskDetails />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
