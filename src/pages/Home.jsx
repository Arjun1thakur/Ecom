import React from 'react'
import Benifit from '../components/Benifit'
import MinStore from '../components/Extra/minStore'
import Slider from '../components/Slider'
import { img } from '../components/img'

const Home = ({data,category}) => {
  return (
    <>
        <Slider/>
        <MinStore data={data} category={category}/>
        <hr className='hr'/>
        <Benifit/>
        <div>
          <img style={{"maxHeight":"300px","margin":"50px 0px"}} src={img[3]} alt="" />
        </div>
    </>
  )
}

export default Home