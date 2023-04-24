import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { LoginUser } from '../Provider/LoginSlice'
import {useSelector,useDispatch} from 'react-redux'
import Loading from './Extra/loading'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    let navigate=useNavigate()
    let userData=useSelector(state=>state.Login)
    const dispatch=useDispatch()
    let [formData,setData]=useState({
        email:'',
        password:''
    })
    let data=(e)=>{
        setData({...formData,[e.target.name]:e.target.value})
    }
    let post=async(e)=>{
        try {
            e.preventDefault()
            let {email,password}=formData
            dispatch(LoginUser({email,password})) 
            // if(userData.product.data.user){
                navigate('/')
            // }else{
            //     alert('Wrong User info')
            // }
        } catch(error){
            alert(error)
        }
    }
  return (
    <>
         {userData.loading && <Loading/>}
        {!userData.loading && userData.error ? <div style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%,-50%)"}}><h1>Error : {userData.error}</h1></div>:
        <div className="flex login-box">  
            <div className='flex logins'>
                <div>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/877e53119900623.Y3JvcCwzMTk2LDI0OTksNzEsMA.png" alt="img" />
                </div>
                <div  className='flex setup'>
                    <h1>Login</h1>
                    <input type="email" name="email" id="input-name" onChange={data} placeholder='Email'/>
                    <input type="password" name="password" onChange={data} id="input-password" placeholder='Password' />
                    <input type="submit" value="Continue" onClick={post} className='sign-up subin'/>
                    <hr className='hor'/>
                    <p>New to iShop</p>
                    <Link className='sign-up' to={"/signup"}>Create your IShop account</Link>
                </div>
            </div> 
        </div>
    }
    </>
  )
}

export default Login