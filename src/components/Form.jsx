import React from 'react'


const Form = () => {
  return (
    <div className='d-flex mb-4'>
        <input type="text" className='form-control' placeholder='Enter City ...' />
        <input type="button" value="search" className='btn btn-primary ms-1' />
    </div>
  )
}

export default Form
