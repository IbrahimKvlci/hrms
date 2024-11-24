import axios from "axios"

export default class CandidateService{
    getCandidateCVList(){
        return axios.get("http://localhost:8080/api/candidates/getAllCandidateCV")
    }
}