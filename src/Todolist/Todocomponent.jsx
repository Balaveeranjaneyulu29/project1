import React from 'react'

const Todocomponent = ({list,deleteHandler}) => {
  return (
    <div>
      {list.map((todos,index)=>
    <div key={index}>
        <h1>{todos} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h1>
    </div>
    )}
    </div>
  )
}

export default Todocomponent
