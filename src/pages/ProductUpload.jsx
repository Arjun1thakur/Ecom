import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ProductUpload = () => {
    let [data,setData]=useState()
    let User=useSelector(state=>state.Login.product.data)
    let changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let sendData=(e)=>{
       if(User){
        e.preventDefault()
        let send=axios.post("http://localhost:8080/store/upload",{...data,User:User.user._id})
        if(send){
            alert('done')
        }else{
            alert("error")
        }
       }else{
        alert('User not found')
       }
    }
  return (
    <>
        <h1 style={{"textAlign":"center","margin":"20px"}}>Welcome to our Product Send page</h1>
        
            <form style={{"display":"grid","width":"80%","gap":"20px","margin":"20px auto"}}>
            <input type="text" onChange={changeHandler} placeholder='Title' name='title'/>
            <input type="text" onChange={changeHandler} placeholder='Brand' name='brand'/>
            <input type="number" onChange={changeHandler} placeholder='Price' name='price'/>
            <input type="text" onChange={changeHandler} placeholder='Detail' name='description'/>
            <input type="text" onChange={changeHandler} placeholder='Category' name='category'/>
            <input type="text" onChange={changeHandler} placeholder='Image-link' name='image'/>
            <input type="number" onChange={changeHandler} placeholder='Rating' name='rate' />
            <input type="number" onChange={changeHandler} placeholder='Review Count' name='count' />
            <input type="text" onChange={changeHandler} placeholder='Comment' name='comment' />
            <button onClick={sendData} style={{"border":"1px solid","padding":"10px 20px","textAlign":"center"}}>Submit</button>
        </form>
    </>
  )
}

export default ProductUpload

