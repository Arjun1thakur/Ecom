import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { fetchSingleProduct } from '../Provider/SingleProductSlice'
import Loading from '../components/Extra/loading'
import { useState } from 'react'
import { productAdd } from '../Provider/cartSlice'
const Unique = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  let val=useSelector(state=>state.singleProduct)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchSingleProduct(id))
    },[dispatch,id])
    let Data=val.product[0]

    let [count,setCount]=useState(1)

    let getInCart=()=>{
        dispatch(productAdd({...Data,count}))
        navigate('/cart')
    }
    
  return (
    <>
        { val.loading && <Loading/>}
        {!val.loading && val.error ? <div style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%,-50%)"}}><h1>Error : {val.error}</h1></div>:null}
        {!val.loading && Data ? (
            <>
                <div>
       <div className="section">
                 <div className="product_info">
                     <div className='flex unique_pro'>
                         <div className='unique_left'>
                             <img src={Data.image} alt="img" />
                             
                         </div>
                         <div className='unique_right'>
                             <div className='unique-details'>
                                 <h3 style={{"textTransform":"uppercase"}}>{Data.category}</h3>
                                 <h1 style={{"color":"gray"}}>{Data.title}</h1>
                                 <h3 style={{"textTransform":"uppercase"}}>{Data.brand}</h3>
                                 <p style={{"color":"gray"}}>{Data.description}</p>
                                 <h4>Rating <span style={{"color":"gray"}}>{Data.rating[0].rate}</span> |  Reviews <span style={{"color":"gray"}}>{Data.rating[0].count}</span></h4>
                                 <div className='flex' style={{"width":"100%","textAlign":"center","flexDirection":"column"}}>
                                     <h1 style={{"justifyContent":"space-evenly","boxShadow":"0px 0px 5px grey"}} className='flex'><button onClick={()=>{
                                        if(count>=2){
                                        setCount(count-1)
                                    }else{
                                        setCount(1)
                                    }
                                     }
                                        }>-</button>
                                     {count}
                                     <button onClick={()=>setCount(count+1)}>+</button></h1>
                                    <h1 style={{"color":"gray"}}>Total : {Data.price * count}₹</h1>
                                     <div className='flex' style={{"justifyContent":"space-around"}}>
                                        <button className='cart' onClick={getInCart}>Go to Cart</button>
                                        {/* <Link className='cart' to={"https://rzp.io/l/4pyGTIarom"}>Buy Now</Link> */}
                                    </div>
                                 </div>
                                 <div className="latest-comment">
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 {/* <div className="related_post">
                     <h1>You might be interested in</h1>
                     <FeaturedSlider value={value}/>
                                </div>*/}
             </div>
     </div>
            </> ): null
    }
    </>
  )
}

export default Unique