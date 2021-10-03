import React from 'react'
import { Formik, Form,Field,ErrorMessage } from 'formik'
import '../css/form.css'
import * as Yup from 'yup'
export default function Forms() {

    const initialValues = {
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber:'',
    }



    const validationSchema = Yup.object({
        firstName : Yup.string().required('Required!'),
        lastName : Yup.string().required('Required'),
        email : Yup.string().email('Invalid email format'),
        phoneNumber : Yup.number().required('required')
    })

    const onSubmit = (values) =>{
        console.log(values,'onsubmit values')
    }

 

    // console.log('form touched', Formik)
    
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
        >

            <Form>
            
            <label htmlFor="firstName" >First Name:</label><br/>
            <Field 
            
            type="text"
            id="firstName"
            name = "firstName"
            placeholder="Enter Your First Name" 

            /><br/>
            <ErrorMessage name='firstName'/>
            
            <label htmlFor="lastName">Last Name:</label><br/>
            <Field             
            type="text"
            id="lastName"            
            name="lastName"
            placeholder="Enter Your Last Name" 

            /><br/>
            <ErrorMessage name='lastName'/>

            <label htmlFor="email">Email:</label><br/>
            <Field            
            type="email"
            id="email" 
            name="email"
            placeholder="@gmail.com"
           
            /><br/>
            <ErrorMessage name='email'/>

            <label htmlFor="phoneNumber">Phone Number:</label><br/>
            <Field 
            type="number"              
            id="phoneNumber"             
            name="phoneNumber" 
            placeholder="Phone Number"
    
            /><br/>
            <ErrorMessage name='phoneNumber'/>
            <button
            type="submit">
            Submit
            </button>
            </Form>

        </Formik>
    )
}
