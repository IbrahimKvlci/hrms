import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Form, FormField } from 'semantic-ui-react'
import JobTitleService from '../Services/jobTitleService'
import _ from 'underscore'

export default function AddJob() {

    const [jobTitles, setJobTitles] = useState([])
    useEffect(() => {
      let jobTitleService=new JobTitleService()
      jobTitleService.getAll().then(result=>setJobTitles(result.data.data))
    },[])
    
    const jobTitleOptions=_.map(jobTitles,jobTitle=>({
        key:jobTitle.id,
        text:jobTitle.title,
        value:jobTitle
    }))

    return (
        <div>
            <Form>
                <FormField>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </FormField>
                <FormField>
                    <label>Job Title</label>
                    <Dropdown placeholder='Job Titles' search selection options={jobTitleOptions}/>
                </FormField>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
