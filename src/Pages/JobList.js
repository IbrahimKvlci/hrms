import React, { useState,useEffect } from 'react'
import { Button, Card, CardContent, Grid, GridColumn, GridRow, Header, Icon } from 'semantic-ui-react'
import './jobList.css'
import JobService from '../Services/jobService'


export default function JobList() {

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        let jobService=new JobService
        jobService.getActiveJobs().then(result=>setJobs(result.data.data))
    },[])

    return (
        <div>
            <Grid>
                {
                    jobs.map(job => (
                        <GridColumn width={4}>
                            <Card>
                                <CardContent header={job.jobTitle.title} />
                                <CardContent description={job.jobDetails} />
                                <div className='dates'>
                                    <div className='postingDate'>
                                        <div className='header'><Header size='tiny' >Posting Date</Header></div>
                                        <p className='date'>{new Date(job.postingDate).toISOString().slice(0, 10)}</p>
                                    </div>
                                    <div className='deadlineDate'>
                                        <div className='header'><Header size='tiny' >Deadline Date</Header></div>
                                        <p className='date'>{new Date(job.applicationDeadlineDate).toISOString().slice(0, 10)}</p>
                                    </div>
                                </div>
                                <CardContent extra>
                                    <div className='cardBottom'>
                                        <div className='candidatesNumber'><Icon className='user' name='user' />{job.numberOpenPositions} candidates</div>
                                        <div className='applyButton'><Button color="green">Apply</Button></div>
                                    </div>
                                </CardContent>
                            </Card>
                        </GridColumn>
                    ))
                }
            </Grid>
        </div>
    )
}
