import React, { useEffect, useState } from 'react'
import JobTitleService from '../Services/jobTitleService'
import _, { result, values } from 'underscore'
import { Formik, useFormik } from 'formik'
import { Button, FormField } from 'semantic-ui-react'
import { Form, Select } from 'formik-semantic-ui-react'
import CityService from '../Services/cityService'
import WorkingTimeService from '../Services/workingTimeService'
import WorkingTypeService from '../Services/workingTypeService'
import JobService from '../Services/jobService'


export default function AddJob() {

    let jobService=new JobService

    const [jobTitles, setJobTitles] = useState([])
    const [cities,setCities]=useState([])
    const [workingTimes, setWorkingTimes] = useState([])
    const [workingTypes, setWorkingTypes] = useState([])
    
    useEffect(() => {
        let jobTitleService = new JobTitleService()
        let cityService=new CityService()
        let workingTimeService=new WorkingTimeService()
        let workingTypeService=new WorkingTypeService()

        jobTitleService.getAll().then(result => setJobTitles(result.data.data))
        cityService.getAll().then(result=>setCities(result.data.data))
        workingTimeService.getAll().then(result=>setWorkingTimes(result.data.data))
        workingTypeService.getAll().then(result=>setWorkingTypes(result.data.data))
    }, [])

    const jobTitleOptions = _.map(jobTitles, jobTitle => ({
        key: jobTitle.id,
        text: jobTitle.title,
        value: jobTitle
    }))
    const cityOptions = _.map(cities, city => ({
        key: city.id,
        text: city.name,
        value: city
    }))
    const workingTimeOptions = _.map(workingTimes, workingTime => ({
        key: workingTime.id,
        text: workingTime.title,
        value: workingTime
    }))
    const workingTypeOptions = _.map(workingTypes, workingType => ({
        key: workingType.id,
        text: workingType.title,
        value: workingType
    }))

    const formik = useFormik({
        initialValues: {
            jobDetails: "",
            minSalary: 0,
            maxSalary: 0,
            numberOpenPositions: 0,
            applicationDeadlineDate: new Date(),
            jobTitle: {},
            city: {},
            workingTime: {},
            workingType: {}
        },
        onSubmit: values => {
            jobService.add({
                id:0,
                jobDetails:values.jobDetails,
                minSalary:values.minSalary,
                maxSalary:values.maxSalary,
                numberOpenPositions:values.numberOpenPositions,
                postingDate:new Date(),
                applicationDeadlineDate:values.applicationDeadlineDate,
                employer:{
                    id:23,
                    email:"",
                    password:"",
                    companyName:"",
                    webAddress:"",
                    phoneNumber:""
                },
                jobTitle:values.jobTitle,
                city:values.city,
                workingTime:values.workingTime,
                workingType:values.workingType,
                active:true
            })
        }
    })

    return (
        <div>
            <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit}>
                <Form>
                    <FormField>
                        <label>Job Title</label>
                        <Select value={formik.values.jobTitle} name='jobTitle' onChange={(e, { value }) => formik.setFieldValue('jobTitle', value)} placeholder='Job Titles' search selection options={jobTitleOptions} />
                    </FormField>
                    <FormField>
                        <label>Job Details</label>
                        <input id='jobDetails' name='jobDetails' type='text'onChange={formik.handleChange} value={formik.values.jobDetails} placeholder='Job Details' />
                    </FormField>
                    <FormField>
                        <label>Min Salary</label>
                        <input id='minSalary' name='minSalary' type='number' onChange={formik.handleChange} value={formik.values.minSalary} placeholder='Min Salary' />
                    </FormField>
                    <FormField>
                        <label>Max Salary</label>
                        <input id='maxSalary' name='maxSalary' type='number' onChange={formik.handleChange} value={formik.values.maxSalary} placeholder='Max Salary' />
                    </FormField>
                    <FormField>
                        <label>Number Open Positions</label>
                        <input id='numberOpenPositions' name='numberOpenPositions' type='number' onChange={formik.handleChange} value={formik.values.numberOpenPositions} placeholder='Number Open Positions' />
                    </FormField>
                    <FormField>
                        <label>Application Deadline Date</label>
                        <input id='applicationDeadlineDate' name='applicationDeadlineDate' type='date' onChange={formik.handleChange} value={formik.values.applicationDeadlineDate} placeholder='Application Deadline Date' />
                    </FormField>
                    <FormField>
                        <label>City</label>
                        <Select value={formik.values.city} name='city' onChange={(e, { value }) => formik.setFieldValue('city', value)} placeholder='cities' search selection options={cityOptions} />
                    </FormField>
                    <FormField>
                        <label>Working Time</label>
                        <Select value={formik.values.workingTime} name='workingTime' onChange={(e, { value }) => formik.setFieldValue('workingTime', value)} placeholder='Working Times' search selection options={workingTimeOptions} />
                    </FormField>
                    <FormField>
                        <label>Working Type</label>
                        <Select value={formik.values.workingType} name='workingType' onChange={(e, { value }) => formik.setFieldValue('workingType', value)} placeholder='Working Types' search selection options={workingTypeOptions} />
                    </FormField>

                    <Button type='submit'>Submit</Button>
                </Form>
            </Formik>

        </div>
    )
}
