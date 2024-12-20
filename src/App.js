import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import EmployeeList from './components/EmployeeList';
import "./App.css"

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Todos</Link>
        <Link to="/employees">Employees</Link>
      </nav>
      <Routes>
        <Route path="/" element={<><AddTodo /><TodoList /></>} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;

