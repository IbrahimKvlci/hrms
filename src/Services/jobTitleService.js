import axios from "axios";

export default class JobTitleService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobtitles/getall")
    }
}