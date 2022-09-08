import React, { useState } from "react";
import "./Modal.css";
import UpdateBtn from "./updateBtn";


export type {val} from './TableMaker'


export default function Modal() {

  const [modal, setModal] = useState(false);
  const [setNewQuantity] =useState(0);
  const [setNewFoodName] =useState([]);

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
        Update
      </button>

      {modal && (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">

            <h3>
                <>

                <input type='text' placeholder="New Food Name.." onChange={(event) =>{ setNewFoodName(event.target.value);}}/>
                <input type='number' placeholder="New Quantity.." onChange={(event) =>{ setNewQuantity(event.target.value);}}/>
                <UpdateBtn/>

                </>

              </h3>
         
              
              

                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>



            </div>
        </div>
      )}
    </>
  );
}




