import axios from 'axios';

const EMPLOYEE_API_REST_URL = "/employees";



export const getEmployes = () => {
    return axios.get(EMPLOYEE_API_REST_URL);
};


//for posting
//export const saveEmployee = (body) => {
//    return axios.pots(BOOK_API_REST_URL,body);
//};

