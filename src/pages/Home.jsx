import React from 'react'
import Benifit from '../components/Benifit'
import MinStore from '../components/Extra/minStore'
import Slider from '../components/Slider'

const Home = ({data}) => {
  return (
    <>
        <Slider/>
        <MinStore data={data}/>
        <hr className='hr'/>
        <Benifit/>
    </>
  )
}

export default Home