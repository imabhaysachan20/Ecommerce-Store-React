import React from 'react'
import {FormInput,SubmitBtn} from "../components"
import {Form,Link} from "react-router-dom"
const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-100 gap-y-4 shadow-lg'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
      <FormInput type={"email"} label={"Email"} name ="identifier" defaultValue={"test@test.com"}></FormInput>
      <FormInput type={"password"} label={"password"} name ="password" defaultValue={"secret"}></FormInput>
      <div className="mt-4">
      <SubmitBtn text = {"Login"}/>
      </div>
      <button type='button' className='btn btn-secondary btn-block'>Guest Login</button>
      <p className='text-center'>Not a member yet? <Link className='ml-2 link link-hover link-primary capitalize' to = "/register">Register</Link></p>
      </Form>
    </section>
  )
}

export default Login
