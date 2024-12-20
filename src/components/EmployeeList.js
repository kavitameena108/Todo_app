import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../redux/actions/employeeActions';

const EmployeeList = () => {
  const { employees, loading } = useSelector(state => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employee List</h2>
      {employees.map(employee => (
        <div key={employee.id}>
          <p>{employee.name}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;

