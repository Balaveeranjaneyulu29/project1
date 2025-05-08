import React from 'react'
import axios from 'axios'
 
const url="http://localhost:4002/products"
 export async function getData()
{
     return axios.get(url)
}
export async function deleteData(id)
{
     return axios.delete(`${url}/${id}`)
}
export async function postData(data)
{
     return axios.post(url,data,{
          headers:{
               'Content-type':'application/json'
          }
     }
     )
}
export async function putData(id,data)
{
     return axios.put(url+"/"+id,data,{
          headers:{
               'Content-type':'application/json'
          }
     }
     )
}


