import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import JobList from '../Pages/JobList'
import CandidateList from '../Pages/CandidateList'
import EmployerList from '../Pages/EmployerList'
import JobDetail from '../Pages/JobDetail'
import AddJob from '../Pages/AddJob'

export default function Dashboard() {
  return (
    <div>
        <Routes>
            <Route path='/' Component={JobList}/>
            <Route path='/jobs' Component={JobList}/>
            <Route path='/candidates' Component={CandidateList}/>
            <Route path='/employers' Component={EmployerList}/>
            <Route path='/jobDetail/:id' Component={JobDetail}/>
            <Route path='/add/job' Component={AddJob}/>

        </Routes>
    </div>
  )
}
