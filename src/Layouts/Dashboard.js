import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import JobList from '../Pages/JobList'
import CandidateList from '../Pages/CandidateList'
import EmployerList from '../Pages/EmployerList'

export default function Dashboard() {
  return (
    <div>
        <Routes>
            <Route path='/' Component={JobList}/>
            <Route path='/jobs' Component={JobList}/>
            <Route path='/candidates' Component={CandidateList}/>
            <Route path='/employers' Component={EmployerList}/>

        </Routes>
    </div>
  )
}
