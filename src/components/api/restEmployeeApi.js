import axios from 'axios';

const EMPLOYEE_API_REST_URL = "/employees";
const EMPLOYEE_ADD_API_REST_URL = "/addEmployee";
const EMPLOYEE_GET_API_REST_URL = "/employees/";
const EMPLOYEE_LOGIN_API_REST_URL = "/login";




export const getEmployes = () => {
    return axios.get(EMPLOYEE_API_REST_URL);
};


/**
 * @returns Get Only one employee by id
 */
export const getEmployeeById = (employeeId) => {
    const body={
        employeeId:employeeId
    }
    return axios.get(EMPLOYEE_GET_API_REST_URL,body);
};

//for posting
export const saveEmployee = (body) => {
   return axios.post(EMPLOYEE_ADD_API_REST_URL,body);
};

/**
 * Login EndPoint
 */
//for posting
export const login = (creds) => {
    console.log("i am in login");
    console.log(creds);
    return axios.post(EMPLOYEE_LOGIN_API_REST_URL,{});
 };
 
 

