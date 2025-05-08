
import Form from './Form'
import Table from './Table'
import {getData,deleteData,postData,putData} from './Api'

import { useEffect, useState } from 'react'

function Fun() {
 const [products,setProducts] =useState([])
 const [open,setOpen] =useState(false)
 const [edit,setEdit] =useState(false)
  const [initialForm,setForm]=useState({
    id:'',name:'',brand:'',price:''
  })

  useEffect(()=>{
    getProducts()
  },[])
  
  let getProducts=async()=>{
     let res=await getData();
     setProducts(res.data)
     console.log(res);
  }
  let deleteProducts=async(id)=> {
  await  deleteData(id);
    getProducts()
  }

  let addProducts=async(product)=> {

    let data={
      name:product.name,
      brand:product.brand,
      price:product.price
    }


    if(edit)
    await putData(product.id,data);
  else 

    await  postData(data);
      getProducts()
      setOpen(false)
    }

    let editProducts=async(data)=> {
      
        setForm(data)
        setOpen(true)
      }
  let showForm=()=>{
    setOpen(true)
    setForm({
      id:'',name:'',brand:'',price:''
    })
  }
  let closeForm=()=>{
    setOpen(false)
  }
  return (
    <div className="App">
      <button onClick={()=>{
        showForm()
      }}>add</button>
      <Table products={products} delete={deleteProducts} edit={editProducts}/>
      {
        open && <Form closeForm={closeForm} data={initialForm} add={addProducts}/>
      }
    </div>
  );
}

export default Fun;
