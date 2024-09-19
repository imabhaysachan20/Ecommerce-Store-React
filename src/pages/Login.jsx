import React from 'react'
import {FormInput,SubmitBtn} from "../components"
import {Form,Link,redirect,useNavigate} from "react-router-dom"
import { toast } from 'react-toastify'
import { loginUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { customFetch } from '../utils'





export const action = (store)=>async ({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local',data);
    
    store.dispatch(loginUser(response.data))
    toast.success('logged in successfully');
    return redirect('/');
  }
  catch (error) {
    console.log(error);
    
    const errorMessage =  error?.response?.data?.error?.message || "please provide valid credentials";
    toast.error(errorMessage)
    return null;
  }
}




const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please try again');
    }
  };
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-100 gap-y-4 shadow-lg'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
      <FormInput type={"email"} label={"Email"} name ="identifier" defaultValue={"test@test.com"}></FormInput>
      <FormInput type={"password"} label={"password"} name ="password" defaultValue={"secret"}></FormInput>
      <div className="mt-4">
      <SubmitBtn text = {"Login"}/>
      </div>
      <button onClick={loginAsGuestUser} type='button' className='btn btn-secondary btn-block'>Guest Login</button>
      <p className='text-center'>Not a member yet? <Link className='ml-2 link link-hover link-primary capitalize' to = "/register">Register</Link></p>
      </Form>
    </section>
  )
}

export default Login
