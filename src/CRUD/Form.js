import React from 'react'
import { useState } from 'react'

const Form = (props) => {
  const [product,setProduct]=useState(props.data)

  let changeFormData=(event)=>{
    const {name,value}=event.target;
    setProduct({...product,[name]:value})
  }

  return (
    <div>
      <form  style={{
                    position: 'absolute',
                    top: '250px',
                    left: '400px',
                    backgroundColor: 'rgba(248, 164, 164, 0.8)',
                    padding: '20px',
                }}>
        <div>
          <label>id no</label>
          <input type='text' placeholder='Enter id' name='id' value={product.id} onChange={changeFormData} required></input>
        </div>
        <div>
          <label>model</label>
          <input type='text' placeholder='Enter model' name='name' value={product.name} onChange={changeFormData}></input>
        </div>
        <div>
          <label>price</label>
          <input type='text' placeholder='Enter price' name='price' value={product.price} onChange={changeFormData}></input>
        </div>
        <div>
          <label>brand</label>
          <input type='text' placeholder='Enter brand' name='brand' value={product.brand} onChange={changeFormData}></input>
        </div>
        <button onClick={(e)=>{
          e.preventDefault()
          props.closeForm()
        }}> cancle
        </button>
        <button onClick={(e)=>{
          e.preventDefault()
          props.add(product)
        }}>save
        </button>
      </form>
   
    </div>
  )
}

export default Form
