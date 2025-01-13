import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import Card from './components/Card'
import './App.css'
import {api,api_key} from './api/apiResource'

const App = () => {
    const [data,setData] = useState({})
    const fetch = async () => {
        const res = await api.get(`/weather?q=Yangon&appid=${api_key}`)
        // console.log(res);
        setData(res.data)
    }
    useEffect( () => {
        fetch()
    },[])
  return (
    <div className='bg-white shadow-sm p-5 rounded'>
        <Form/>
        <Card data={data}/>
    </div>
  )
}

export default App
