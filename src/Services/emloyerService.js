import axios from "axios"

export default class EmployerService{
    getEmployerList(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }
    add(employer){
        return axios.post("http://localhost:8080/api/employers/add",employer)
    }
}