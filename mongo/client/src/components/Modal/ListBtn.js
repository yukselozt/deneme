import React, { useState } from "react";
import "./Modal.css";
import "../../App.css"


export default function ListBtn() {

  const [modal, setModal] = useState(false);

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
        List
      </button>

      {modal && (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">



                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>
            </div>
        </div>
      )}
    </>
  );
}



