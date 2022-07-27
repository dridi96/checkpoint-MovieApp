import { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import App from './App';
import {data} from './component/data';
import Description from './component/description';

function Routerr() {
const[newData,setNewData]=useState(data);
console.log(data)
    return (  
      
    <Router>
<Routes>
<Route path='/' element={<App newData={newData} setNewData={setNewData} />}></Route>
<Route path='/description/:idd' element={<Description/>}></Route>

</Routes>
    </Router>
    );
}

export default Routerr;