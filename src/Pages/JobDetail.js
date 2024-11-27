import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, Icon } from 'semantic-ui-react'
import './jobDetail.css'
import { useParams } from 'react-router-dom'
import JobService from '../Services/jobService'

export default function JobDetail() {

    let {id}=useParams()
    const [job, setJob] = useState({})
    useEffect(() => {
        let jobService=new JobService()
        jobService.getJobById(id).then(result=>setJob(result.data.data))
    },[])
    

    return (
        <div>
            <Card fluid>
                <CardContent header={job.jobTitle?.title} />
                <CardContent description={job.employer?.companyName} />
                <CardContent>
                    <p>{job.workingType?.title}</p>
                    <p>{job.workingTime?.title}</p>

                </CardContent>
                <CardContent>
                    <p>{job.jobDetails}</p>
                </CardContent>
                <CardContent>
                    <p>{job.minSalary}</p>
                    <p>{job.maxSalary}</p>
                </CardContent>
                <CardContent>
                    <p>{job.employer?.webAddress}</p>
                    <p>{job.employer?.phoneNumber}</p>
                </CardContent>
                <CardContent extra>
                    <div className='cardBottom'>
                        <div className='candidatesNumber'><Icon className='user' name='user' />{job.numberOpenPositions} candidates</div>
                        <div className='applyButton'><Button color="green">Apply</Button></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
