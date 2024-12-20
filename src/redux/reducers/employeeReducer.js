const initialState = {
    employees: [],
    loading: false,
  };
  
  export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EMPLOYEES_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_EMPLOYEES_SUCCESS':
        return { ...state, loading: false, employees: action.payload };
      case 'FETCH_EMPLOYEES_FAILURE':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
