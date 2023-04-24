import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProduct } from './Provider/ProductSlice'
import Loading from './components/Extra/loading'
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header&Footer/Header'
import Footer from './components/Header&Footer/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import Unique from './pages/Unique'
import Signup from './components/Signup'
import Login from './components/Login'
import Cart from './pages/Cart'
import ProductUpload from './pages/ProductUpload'
import Store from './pages/Store'

// [ ] CSS
import ('./assets/css/extra.css')
import ('./assets/css/Header&Footer.css')
import ('./assets/css/Home.css')
import ('./assets/css/Display.css')
import ('./assets/css/login.css')
import ('./assets/css/responsive.css')


const Main = () => {
    let product=useSelector(state=>state.Product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])

    let category=new Set([])
    let func=()=>{
      product.product.forEach(data=>{
        category.add(...[data.category])
      })
    }
    func()


  return (
    <>
    
    {product.loading && <Loading/>}
    {!product.loading && product.error ? <div style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%,-50%)"}}><h1>Error : {product.error}</h1></div>:null}
    {!product.loading && product.product.length ?(
      <>
          <Header category={category}/>  
          <Routes>
            <Route path='/' element={<Home data={product.product} category={category}/>}/>
            <Route path='/:id' element={<Category/>}/>  
            <Route path='/store' element={<Store data={product.product}/>}/>  
            <Route path='/store/:id' element={<Unique/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/product/upload' element={<ProductUpload/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          
          <Footer/>
      </>
    ):null}
    </>
  )
}

export default Main