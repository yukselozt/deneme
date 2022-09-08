import React, { useState } from "react";
import "./Modal.css";
import Axios from 'axios';
import "../../App.css"


export default function Modal() {

  const [modal, setModal] = useState(false);
  const [foodName,setFoodName] =useState('');
  const [days,setDays] = useState(0);


  const addToList=() => {
    console.log(foodName+"   "+days);
    Axios.post("http://localhost:3001/insert",{foodName:foodName,days:days});
    window.location.reload();
  };

  

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add
      </button>

      {modal && (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">

              <ppp>
                <>
                  <label>Food Name</label>
                  <input type ="text" onChange={(event) =>{setFoodName(event.target.value);}}/> 
                  <label>Quantity</label>
                  <input type ="number" onChange={(event) =>{setDays(event.target.value);}}/>
                </>
                <button onClick={addToList}>Add To List</button>

              </ppp>

                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>
            </div>
        </div>
      )}
    </>
  );
}




