import {React,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {Categoryfetch} from '../Provider/CategotySlice';
import {Link} from 'react-router-dom'
import Loading from '../components/Extra/loading';

const Category = () => {
  const { id } = useParams();
  let val=useSelector(state=>state.Category.product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Categoryfetch(id))
    },[dispatch,id])
  return (
    <>
       { val.loading && <Loading/>}
        {!val.loading && val.error ? <div style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%,-50%)"}}><h1>Error : {val.error}</h1></div>:null}
        {!val.loading && val ? (
          <>
        <div><h1 style={{"textTransform":"uppercase","textAlign":"center","margin":"30px auto","textDecoration":"underline"}}>{val[0] && val[0].category}</h1></div>
        <div className="itemCard flex">
            {val && val.map((data)=>{
              return (
              <div key={data._id}>
              <Link to={`/store/${data._id}`} >
                <div className="Icards flex">
                  <div className="img"><img src={data.image} alt="img" /></div>
                  <h5>{data.title.slice(0,30)}...</h5>
                  <p>Rating {data.rating[0].rate} | {data.rating[0].count} Reviews</p>
                  <p>{data.price} $</p>
                </div>
              </Link>
              </div>
              )
            })}
        </div>
        </>
        ):null}
    </>
  )
}

export default Category