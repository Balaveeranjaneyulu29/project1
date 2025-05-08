import React from 'react';
import {Routes,Route} from "react-router-dom"
import Forms from './Forms'
import Navi from './Navi';
import Signup from './Signup';
import Result from './Result';
const Navfun = () => {
  return (
    <div>
     <Navi/>
     <Routes>
      <Route path='/login' element={<Forms/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/result' element={<Result/>}/>
     </Routes>
    </div>
  );
}

export default Navfun;