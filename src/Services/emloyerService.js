import axios from "axios"

export default class EmployerService{
    getEmployerList(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }
}