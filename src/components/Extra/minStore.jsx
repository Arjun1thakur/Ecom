import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const MinStore = ({data,category}) => {
  let navigation=useNavigate()
  let change=(data)=>{
    navigation(`/store/${data._id}`)
  }
  return (
    <>
        <section>
            <h1 style={{"textTransform":"uppercase","textAlign":"center","padding":"30px","zIndex":"9999"}}>Best Seller</h1>
            <div className='product-conatiner flex'>
                {data.slice(0,6).map(data=>{
                  return (
                      <button onClick={()=>change(data)} key={data._id}>
                        <div className="card" key={data._id}>
                          <div className='flex card-box'>
                            <div className='card-top'><img src={data.image} alt="" /></div>
                            <h4>{data.title.slice(0,25)}...</h4>
                            <p>Brand | <span style={{"textTransform":"uppercase"}}>{data.brand}</span></p>
                            <p>Rating | <span>{data.rating[0].rate}</span></p>
                            <p>Price | <span>{data.price}₹</span></p>
                          </div>
                        </div>
                      </button>
                  )
                })}
            </div>
            <Link to={"/store"}><h1 style={{"textAlign":"center"}}>Load More</h1></Link>
        </section>
    </>
  )
}

export default MinStore