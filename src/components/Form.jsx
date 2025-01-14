/* eslint-disable react/prop-types */
import React, { useRef } from 'react'


const Form = ({fetch}) => {
    const ref = useRef()

  return (
    <div className='d-flex mb-4'>
        <input type="text" ref={ref} className='form-control' placeholder='Enter City ...' />
        <input type="button" value="search" onClick={ () => fetch(ref.current.value) } className='btn btn-primary ms-1' />
    </div>
  )
}

export default Form
