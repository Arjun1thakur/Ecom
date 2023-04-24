import React from 'react'
import { Link } from 'react-router-dom'

const Store = ({data}) => {
  return (
    <>
        <div><h1 style={{"textTransform":"uppercase","textAlign":"center","margin":"30px auto","textDecoration":"underline"}}>Our Store</h1></div>
        <div className="itemCard flex">
            {data && data.map((data)=>{
              return (
                <div key={data._id}>
                <Link to={`/store/${data._id}`} >
                    <div className="Icards flex">
                        <div className="img"><img src={data.image} alt="img" /></div>
                        <h5>{data.title.slice(0,30)}...</h5>
                        <p>{data.price} $</p>
                    </div>
                </Link>
              </div>  
              )}
            )}
        </div>
    </>
  )
}

export default Store