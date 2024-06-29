import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Taskinput from './component/Taskinput';
import TaskList from './component/TaskList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h2>Todo List App</h2>
            <Routes>
               {/* Route for Taskinput component*/} 
              <Route path="/" element={<Taskinput />} exact />
               {/* Route for TaskList component */}
              <Route path="/tasklist" element={<TaskList />} />
            </Routes>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
