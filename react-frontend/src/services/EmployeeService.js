import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+ '/all');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()