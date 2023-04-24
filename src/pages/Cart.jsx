import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { OrdersSend } from '../Provider/OrderSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  let navigate=useNavigate()
  let product=useSelector(state=>state.Cart)
  let Login=useSelector(state=>state.Login)
  let dispatch =useDispatch()
  let order=()=>{
    if(Login.product.data){
      let address=window.prompt("Address","...");
      if(address){
        dispatch(OrdersSend({
          "User":Login.product.data.user._id,
          "OrderItem":[{
              "Name":product[0].title,
              "Qyt":product[0].count,
              "Price":product[0].count * product[0].price,
              "Product":product[0]._id
          }],
          "Address":address,
          "payment":"Pending"
      }))
      alert('Order Successful')
      window.open("https://rzp.io/l/4pyGTIarom")
      }else{
        alert('Sorry Order not saved yet.')
      }
      
    }else{
      alert('First Sign-in')
      navigate('/signin')
    }
  }
  return (
    <>
        <div><h1 style={{"textTransform":"uppercase","textAlign":"center","margin":"50px 0px"}}>cart</h1></div>
        {product && product.map(data=>{
            return (
              <div key={data._id}>
                <div className='flex cart-sent'>
                  <img src={data.image} alt="img" />
                  <div>
                    <h2>{data.title}</h2>
                    <h4>No. of items : {data.count}</h4>
                    <h4>Total price : {data.price * data.count} ₹</h4>
                    <br />
                    {/* <button onClick={()=>dispatch(productDeleted(data.id))}>Remove</button> */}
                  </div> 
                </div>
              </div>
            )
          })}
          <p style={{"textTransform":"uppercase","textAlign":"center","margin":"50px 10px 0px 10px"}}>For Saving you need to pay first. There's no payment limit  pay according to your wallet</p>
          <h1 style={{"textTransform":"uppercase","textAlign":"center","margin":"0px 0px 50px 0px"}}><button className='cartbtn' onClick={order} style={{"boxShadow":"0px 0px 5px gray","padding":"5px 20px","borderRadius":"8px"}}>Buy Now</button></h1>
    </>
  )
}

export default Cart


/* 
<Link className='btn' to={'https://rzp.io/l/4pyGTIarom'}></Link>
*/