import Axios from 'axios';
import { useState} from 'react';
import '../../App.css';
import val from './TableMaker'

function UpdateBtn() {


const [newFoodName] =useState([]);
const [days] = useState(0);
const [newQuantity] =useState(0);

 const updateFood = (id) => {
    console.log("food updated");
    Axios.put("http://localhost:3001/update",{id:id,newFoodName:newFoodName,days:days})
    window.location.reload();
  };

  const updateQuantity = (id) => {
    console.log("quantity updated");
    Axios.put("http://localhost:3001/update",{id:id,newQuantity:newQuantity,days:days})
    window.location.reload();
  };



    return ( 
    
    <button onClick={() => {updateFood(val._id); updateQuantity(val._id);}}> 
    
    Update
    
    </button>
    
    
    );



}


export default UpdateBtn;