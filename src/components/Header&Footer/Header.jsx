import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from  'react-redux'
import { LogOutUser } from '../../Provider/LoginSlice'
const Header = ({category}) => {
    let [Show,setShow]=useState(false)
    let user=useSelector(state=>state.Login.product)
    let dispatch=useDispatch()
    let [profile,setProfile]=useState(false)
    let theme=()=>{
        setProfile(!profile)
        profile ? document.querySelector(':root').classList.remove('dark') : document.querySelector(':root').classList.add('dark') 
      }
    let arr=[...category]

    let logout=()=>{
        dispatch(LogOutUser())
    }
  return (
    <>
        <div className="Navbar">
            <div className="NavbarTop">
                <div className="MainNav flex">
                    <div className="left flex">
                        <button className="ic" onClick={theme}>{profile ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i> } Theme</button>
                    </div>
                    <div className="right flex"> 
                        <div className="ic">{user && user.data ? (<button onClick={()=>{setShow(!Show)}} ><i className="fa-regular fa-user"></i> {user.data.user.name}</button>):(<Link to={'/signin'} ><i className="fa-regular fa-user"></i> SignIn</Link>)}</div>
                        {Show ? (<><button onClick={logout}>LogOut</button></>):null}
                        <div className="ic"><Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i> Items</Link></div>
                        <div className="ic"><i className="fa-solid fa-magnifying-glass"></i></div>
                    </div>
                </div>
            </div>
            <div className="SecNav">
                <div className="top" style={{fontFamily:'Dancing Script, cursive'}}>iSHOP</div>
                <div className="bottom flex">
                    <NavLink className={({onActive})=>(onActive?'btn':null)} to='/' >Home</NavLink>
                    {arr.slice(0,4).map((data,index)=>{
                        return (
                            <NavLink className={({onActive})=>(onActive?'btn':null)} to={`/${data}`} key={index}>{data}</NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Header