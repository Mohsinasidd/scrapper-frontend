import axios from 'axios';
import { MDBInput } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchScrapeData, postScrapeData } from '../../store/scrapeSlice';

const Home = () => {
    const [value, setValue] = useState('');
const [url, setUrl] = useState('')
const scrapeData = useSelector((state)=>state.scrapeData)
const status = useSelector((state)=>state.scrapeData)
const error = useSelector((state)=>state.scrapeData)
console.log(scrapeData , status , error);
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchScrapeData())
},[dispatch])

const scrabBtn = async (e)=>{
    e.preventDefault()
if (url) {
  dispatch(postScrapeData(url))
  setUrl("")
}
} 
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-9 mt-5">

            <MDBInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label='Controlled value'
      id='controlledValue'
      type='text'
    />
    <button onClick={scrabBtn} className='btn btn-primary'>Scrab</button>
            </div>
        </div>
    </div>
  )
}

export default Home