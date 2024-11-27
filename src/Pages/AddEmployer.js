import { useFormik } from 'formik'
import React from 'react'
import { Button, Form, FormField } from 'semantic-ui-react'
import EmployerService from '../Services/emloyerService'

export default function AddEmployer() {

    let employerService=new EmployerService()

    const formik=useFormik({
        initialValues:{
            email:'',
            password:'',
            companyName:'',
            webAddress:'',
            phoneNumber:''
        },
        onSubmit:values=>{
            employerService.add(values)
        }
    })    

    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <FormField>
                    <label>Email</label>
                    <input id='email' name='email' type='email' onChange={formik.handleChange} value={formik.values.email} placeholder='Email' />
                </FormField>
                <FormField>
                    <label>Password</label>
                    <input id='password' name='password' type='password'onChange={formik.handleChange} value={formik.values.password} placeholder='Password' />
                </FormField>
                <FormField>
                    <label>Company Name</label>
                    <input id='companyName' name='companyName' type='text' onChange={formik.handleChange} value={formik.values.companyName} placeholder='Company Name' />
                </FormField>
                <FormField>
                    <label>Web Address</label>
                    <input id='webAddress' name='webAddress' type='text' onChange={formik.handleChange} value={formik.values.webAddress} placeholder='Web Address' />
                </FormField>
                <FormField>
                    <label>Phone Number</label>
                    <input id='phoneNumber' name='phoneNumber' type='tel' onChange={formik.handleChange} value={formik.values.phoneNumber} placeholder='Phone Number' />
                </FormField>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
