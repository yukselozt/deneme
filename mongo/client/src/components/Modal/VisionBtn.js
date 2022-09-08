import React, { useState } from "react";
import "./Modal.css";



export default function VisionBtn() {

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
        John Wick Hakkında
      </button>

      {modal && (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>

            
            <div className="modal-content">

                    <h1> John Wick</h1>

                <div className="outer-div">
                    
                        <div class="inner-div1">

                            <img className="img-modal" src="/images/john-wick.jpg" alt=""/>

                        </div>
                    

                        <div class="inner-div2">

                            <div>
                                <span>
                                    Yönetmen: David Leitch, Chad Stahelski
                                </span>
                            </div>

                            <div>

                                <span>
                                    Senarist: Derek Kolstad
                                </span>
                                  
                            </div>

                            <div>
                                <span>
                                    Oyuncular: Keanu Reeves, Michael Nyqvist, Alfie Allen
                                </span>      
                            </div>

                        </div>

                </div>



            <h1>
                <>
              Özet
                </>
            </h1>



            <comment3>
                
                John Wick, emekliye ayrılmış bir tetikçidir.
                Emekliliğinin tadını çıkarırken karısının yakalandığı amansız hastalıkla hayatı altüst olur.
                Karısından kendisine kalan en değerli varlığı ve can yoldaşı köpeğidir.
                Ancak evine dalan üç gangster onu da öldürür.
                Gansterlerden biri, mafya babası Viggo Tasarov'un oğlu Josef Tasarov'dur ve John'un daha önce birlikte çalıştığı bir adamdır.
                Artık kaybedecek hiçbir şeyi de kalmayan John Wick'in tek istediği intikamdır ve New York sokaklarında düşmanlarıyla nefes kesen bir kovalamacanın içine girer.
                Yönetmenliğini David Leitch ve Chad Stahelski ikilisinin üstlendiği filmin başrolünde Keanu Reevus yer alıyor.
                

            </comment3>


            <button className="close-modal" onClick={toggleModal}>

                  Close

            </button>



            </div>
        </div>
      )}
    </>
  );
}
