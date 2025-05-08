import React from 'react'
import table from './table.css'
function Table(props){
  return (
    <div className='box'>
  <table className='tabel'>
    <thead>
    <tr className='header'>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Model</th>
    </tr>
    </thead>
    <tbody>
        {
           props.products.map(
            (data)=>
             (<tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.brand}</td>
                    <td>
                        <button onClick={()=>{
                          props.edit(data)
                        }}>Edit</button>
                        <button onClick={()=>{
                          props.delete(data.id)
                        }}>Delete</button>
                    </td>
                </tr>)
           ) 
        }
    </tbody>
  </table>
  </div>
  )
}

export default Table
