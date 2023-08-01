import axios from 'axios';

const DEPARTMENT_API_REST_URL = "/departments";
const DEPARTMENT_ADD_API_REST_URL = "/adddepartment";



export const getDepartment = () => {
    return axios.get(DEPARTMENT_API_REST_URL);
};


//for posting
export const savedepartment = (body) => {
   return axios.post(DEPARTMENT_ADD_API_REST_URL,body);
};

