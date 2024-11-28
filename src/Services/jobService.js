import axios from "axios"

export default class JobService{
    getActiveJobs(){
        return axios.get("http://localhost:8080/api/jobs/getAllActives")
    }
    getJobById(id){
        return axios.get("http://localhost:8080/api/jobs/getJobById?id="+id)
    }
    add(job){
        return axios.post("http://localhost:8080/api/jobs/add",job)
    }
}