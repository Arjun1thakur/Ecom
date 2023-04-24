import React from 'react'
import {NavLink} from 'react-router-dom'
// import {useSelector,useDispatch} from  'react-redux'
// import { LogOutUser } from '../../Provider/LoginSlice'

const MinNav = ({category}) => {
    // let [Show,setShow]=useState(false)
    // let user=useSelector(state=>state.Login.product)
    // let dispatch=useDispatch()
    // let [profile,setProfile]=useState(false)
    // let theme=()=>{
    //     setProfile(!profile)
    //     profile ? document.querySelector(':root').classList.remove('dark') : document.querySelector(':root').classList.add('dark') 
    //   }
    let arr=[...category]

  return (
    <>
        <div className='MinNav'>
            <div style={{"background":"transparent","color":"black","width":"100%","textAlign":"center"}}>
                <NavLink className={({onActive})=>(onActive?'btn':null)} style={{"color":"white"}} to='/' >Home</NavLink><br/>
                {arr.slice(0,4).map((data,index)=>{
                    return (
                        <div key={index}  style={{"background":"transparent","color":"black","width":"100%"}}>
                        <NavLink className={({onActive})=>(onActive?'btn':null)}  style={{"color":"white"}} to={`/${data}`}>{data}</NavLink> 
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default MinNav