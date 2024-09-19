import React from 'react'
import {FormInput,SubmitBtn} from "../components"
import {Form,Link, redirect} from "react-router-dom"
import { customFetch } from '../utils';
import { toast } from 'react-toastify';



export const action = async({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register',data);
    toast.success('account created successfully');
    return redirect('/login')
  }
  catch (error) {
    const errorMessage =  error.response.data.error.message || "please provide valid credentials";

    toast.error(errorMessage)
    return null;
  }
}

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-100 gap-y-4 shadow-lg'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
      <FormInput type={"text"} label={"Username"} name ="username"></FormInput>
      <FormInput type={"email"} label={"Email"} name ="email" ></FormInput>
      <FormInput type={"password"} label={"password"} name ="password"></FormInput>
      <div className="mt-4">
      <SubmitBtn text = {"Register"}/>
      </div>
      <p className='text-center'>Already a member? <Link className='ml-2 link link-hover link-primary capitalize' to = "/login">Login</Link></p>
      </Form>
    </section>
  )
}

export default Register
