import axios from 'axios';

const EMPLOYEE_API_REST_URL = "/employees";
const EMPLOYEE_ADD_API_REST_URL = "/addEmployee";



export const getEmployes = () => {
    return axios.get(EMPLOYEE_API_REST_URL);
};


//for posting
export const saveEmployee = (body) => {
   return axios.post(EMPLOYEE_ADD_API_REST_URL,body);
};

