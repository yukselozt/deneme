
import './App.css';


import React from 'react';
import AddBtn from './components/Modal/Modal'
import TableMaker from './components/Modal/TableMaker'
import VisionBtn from './components/Modal/VisionBtn'
import TrailerBtn from './components/Modal/Trailer'
import ListBtn from './components/Modal/ListBtn';
import Navbar from './components/Modal/Navbar';
import axios from 'axios';



const RedisGet=()=> {
  axios
      .get("http://localhost:3001/getData")
      .then((Response) => {
       console.log(Response.data);
       const asd = document.getElementById('myelement')
       asd.innerText=Response.data;
      })
      .catch((error) => {
        console.log("Hata" + error);
      }, []);
  };


function App() {


  return (

    
    <>
    
<Navbar/>

      <div>

        <VisionBtn/>

      </div>

      <div>

        <TrailerBtn/>

      </div>

      <div>

        <ListBtn/>

      </div>

    <div className='App'>

      <h1>

        Food List

      </h1>

      <AddBtn/>
      
      <TableMaker/>




<button onClick={RedisGet}> click me </button>
<p id='myelement'>

</p>

      
    </div>
    </>
  );
}

export default App;
