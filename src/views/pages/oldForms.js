import React from 'react'
import { useFormik } from 'formik'
import '../css/form.css'
import * as Yup from 'yup'


export default function oldForms() {

    const initialValues = {
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber:'',
    }

    const validate =  values =>{

        let errors = {};

        if(!values.firstName){
            errors.firstName = "Required"
        }
        if(!values.lastName){
            errors.lastName = "Required"
        }
        if(!values.email){
            errors.email = "Required"
        } else if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
            errors.email = "Please enter a valid email"
        }
        if(!values.phoneNumber){
            errors.phoneNumber = "Required"
        }

        return errors;
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

    const formik = useFormik({

        // Initial values attributes must match the name attribute of form field
        initialValues,
        onSubmit ,
        // validate,
        validationSchema

    })

    console.log('form touched', formik.touched)
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            
            <label htmlFor="firstName" >First Name:</label><br/>
            <input 
            value={formik.values.firstName}
            type="text"
            onBlur={formik.handleBlur}
            id="firstName"
            name = "firstName"
            placeholder="Enter Your First Name" 
            onChange={formik.handleChange}
            /><br/>
            {formik.errors.firstName &&  formik.touched.firstName? <div className="error">{formik.errors.firstName}</div>: null}
            
            <label htmlFor="lastName">Last Name:</label><br/>
            <input 
            value= {formik.values.lastName} 
            type="text"
            id="lastName" 
            onBlur={formik.handleBlur}
            name="lastName"
            placeholder="Enter Your Last Name" 
            onChange={formik.handleChange} 
            /><br/>
            {formik.errors.lastName && formik.touched.lastName ? <div className="error">{formik.errors.lastName}</div>: null}

            <label htmlFor="email">Email:</label><br/>
            <input type ="" 
            value={formik.values.email} 
            type="email"
            id="email" 
            onBlur={formik.handleBlur}
            name="email"
            placeholder="@gmail.com"
            onChange={formik.handleChange} 
            /><br/>
            {formik.errors.email  && formik.touched.email ? <div className="error">{formik.errors.email}</div>: null}

            <label htmlFor="phoneNumber">Phone Number:</label><br/>
            <input type="number" 
            value={formik.values.phoneNumber} 
            id="phoneNumber" 
            onBlur={formik.handleBlur}
            name="phoneNumber" 
            placeholder="Phone Number"
            onChange={formik.handleChange} 
            /><br/>
            {formik.errors.phoneNumber  && formik.touched.phoneNumber? <div className="error">{formik.errors.phoneNumber}</div>: null}
            <button
            type="submit">
            Submit
            </button>
            </form>
        </div>
    )
}
