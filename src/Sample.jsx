import React from 'react'
import { useEffect,useState } from 'react';

const Sample=async ()=>{

    


        try {
            const url=`http://www.omdbapi.com/?i=tt3896198&apikey=233ee3ee`;

            const response =await fetch(url);
            const data=await response.json();
            console.log(data);
            const Year=data.Ratings.Year;
            
            
        }
        catch(error){
            
        }

        return(
            <div>
                <h1>{Year}</h1>
            </div>
        );
    }
    
    
    


export default Sample
