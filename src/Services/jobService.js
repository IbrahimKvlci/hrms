import axios from "axios"

export default class JobService{
    getActiveJobs(){
        return axios.get("http://localhost:8080/api/jobs/getAllActives")
    }
}