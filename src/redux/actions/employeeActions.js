import axios from 'axios';

export const fetchEmployees = () => async dispatch => {
  dispatch({ type: 'FETCH_EMPLOYEES_REQUEST' });
  try {
    const response = await axios.get('https://api.restful-api.dev/objects');
    dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_EMPLOYEES_FAILURE' });
  }
};

