/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import Card from './components/Card'
import './App.css'
import {api,api_key} from './api/apiResource'

const App = () => {
    const [data,setData] = useState({})
    const [country,setCountry] = useState('Yangon')
    const fetch = async (country_name) => {
        // console.log(country_name);
        if(country_name !== undefined){
            setCountry(country_name)
        }
        try {
            const res = await api.get(`/weather?q=${country}&appid=${api_key}`)
        // console.log(res);
        setData(res.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect( () => {
        fetch()
    },[country])
  return (
    <div className='bg-white shadow-sm p-5 rounded'>
        <Form fetch={fetch}/>
        <Card data={data} />
    </div>
  )
}

export default App
