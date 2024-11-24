import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardMeta, Grid, GridColumn, Icon, Image } from 'semantic-ui-react'
import './candidateList.css'
import CandidateService from '../Services/candidateService'

export default function CandidateList() {

    const [candidateCVs, setCandidateCVs] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService
        candidateService.getCandidateCVList().then(result => setCandidateCVs(result.data.data))
    })

    return (
        <div>
            <Grid>
                {
                    candidateCVs.map(candidateCV => (
                        <GridColumn width={4}>
                            <Card>
                                <div className='imgContainer'>
                                    <img src={candidateCV.imageFullPath} />
                                </div>
                                <CardContent>
                                    <CardHeader>{candidateCV.firstName} {candidateCV.lastName}</CardHeader>
                                    <CardMeta>
                                        <span className='date'>{candidateCV.coverLetterText}</span>
                                    </CardMeta>
                                </CardContent>
                                <CardContent extra>
                                    <a href={candidateCV.githubAddress} target='_blank'>
                                        <Icon name='github' />
                                    </a>
                                    <a href={candidateCV.linkedinAddress} target='_blank'>
                                        <Icon name='linkedin' />
                                    </a>
                                </CardContent>
                            </Card>
                        </GridColumn>
                    ))
                }

            </Grid>
        </div>
    )
}
