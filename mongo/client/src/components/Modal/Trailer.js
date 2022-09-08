import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {


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
          John Wick Fragman
        </button>
  
        {modal && (
          <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">

                <video width="640" height="380" controls>
                    <source src={"/videos/john-wick-trailer.mp4"} type="video/mp4" />
                </video>
  

  
                  <button className="close-modal" onClick={toggleModal}>
                    Close
                  </button>
              </div>
          </div>
        )}
      </>
    );
  }
  
  
  
  
  
