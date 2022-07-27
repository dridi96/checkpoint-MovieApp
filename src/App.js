import { useState } from 'react';
import './App.css';
import MovieList from './component/movieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './component/add';
import MovieFilter from './component/filter';


function App({newData,setNewData}) {

  const Adding =(newMovie)=>{
    setNewData([...newData,newMovie])
  }
  const[search,setSearch]=useState('');
  const[rating ,setRating]=useState(0);

  return (
    <div className="App">
     
      <div className="header">
      <MovieFilter search={setSearch} rate={setRating} Rate={rating} ></MovieFilter>
      <AddMovie mymovie={Adding}></AddMovie>
      </div>
    <div><MovieList movies={newData.filter((el)=>el.title.trim().toLocaleLowerCase().includes(search)&& el.rating>=rating)}></MovieList></div>
     
     
   
    </div>
  );
}

export default App;
