import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { SendUser } from '../Provider/UserSlice'
import Loading from './Extra/loading'

const Signup = () => {
    let userData=useSelector(state=>state.Users)
    let navigate=useNavigate()
    const dispatch=useDispatch()
    let [formData,setData]=useState({
        name:'',
        email:'',
        password:''
    })
    let data=(e)=>{
        setData({...formData,[e.target.name]:e.target.value})
    }
    let post=async(e)=>{
        e.preventDefault()
        let {name,email,password}=formData
        dispatch(SendUser({name,email,password}))
        alert('done')
        navigate("/signin")
    }
  return (
    <>
    {userData.loading && <Loading/>}
        {!userData.loading && userData.error ? <div style={{"position":"relative","top":"50%","left":"50%","transform":"translate(-50%,-50%)"}}><h1>Error : {userData.error}</h1></div>:
        <div className="flex login-box">  
         <div className='flex logins'>
                <div>
                    <img src="data:image/png;base64,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" alt="img" />
                </div>
                <div  className='flex setup'>
                    <h1>Create Account</h1>
                    <input type="text" name="name" onChange={data} id="input-name" placeholder='Name'/>
                    <input type="email" name="email" onChange={data} id="input-email" placeholder='Email'/>
                    <input type="password" name="password" onChange={data} id="input-password" placeholder='Password'/>
                    <input type="submit" onClick={post} value="Continue" className='sign-up subin'/>
                    <hr className='hor'/>
                    <p>Existing User? Log in</p>
                    <Link className='sign-up sign-in' to={"/signin"}>Next</Link>
                </div>
            </div>
        </div>
}
    </>
  )
}

export default Signup



/* 

https://rzp.io/l/4pyGTIarom
*/