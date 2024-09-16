import React from 'react'
import {FormInput,SubmitBtn} from "../components"
import {Form,Link} from "react-router-dom"
const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-100 gap-y-4 shadow-lg'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
      <FormInput type={"text"} label={"Username"} name ="username" ></FormInput>
      <FormInput type={"email"} label={"Email"} name ="email" ></FormInput>
      <FormInput type={"password"} label={"password"} name ="password" ></FormInput>
      <div className="mt-4">
      <SubmitBtn text = {"Register"}/>
      </div>
      <p className='text-center'>Already a member? <Link className='ml-2 link link-hover link-primary capitalize' to = "/login">Login</Link></p>
      </Form>
    </section>
  )
}

export default Register
