import Axios from 'axios';
import { useState,useEffect } from 'react';

function TableMaker() {
    

const  [foodList,setFoodList] =useState([]);
const [newFoodName,setNewFoodName] =useState([]);
const [newQuantity,setNewQuantity] =useState(0);
const [days] = useState(0);


const updateFood = (id) => {
  console.log("food updated");
  Axios.put("http://localhost:3001/update",{id:id,newFoodName:newFoodName,days:days})
  window.location.reload();
};

const updateQuantity = (id) => {
  console.log("quantity updated");
  Axios.put("http://localhost:3001/update2",{id:id,newQuantity:newQuantity,days:days})
  window.location.reload();
};

useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setFoodList(response.data)
    })
  },[])

  const deleteFood = (id) => {
    console.log(id);
    Axios.delete(`http://localhost:3001/delete/${id}`)
    window.location.reload();
  }

  return (
    
<div>

<table  border="1" className='food'>
  <tbody>
    <tr>
        <th><button>xxx</button></th>
        <th>Quantity</th>
        <th>New Food Name</th>
        <th>New Quantity</th>
        <th>Update</th>
        <th>Delete</th>
      
    </tr>
  </tbody>
  
</table>

        { foodList.map((val,key) => {
          return <table  border="1" className='food' key={key} >
                <tbody>
                  <tr>
                    <td>{val.foodName}</td>
                    <td>{val.daysSinceIAte}</td>

                    <td><input type='text' placeholder="New Food Name.." onChange={(event) =>{ setNewFoodName(event.target.value);}}/></td>
                    <td><input type='number' placeholder="New Quantity.." onChange={(event) =>{ setNewQuantity(event.target.value);}}/></td>

                    <td><button onClick={() => {updateFood(val._id); updateQuantity(val._id);}}>Update</button></td>

                    {/*<td> <UpdatePopup/> </td>*/}    

                    <td> <button onClick={() => {deleteFood(val._id)}}>Delete</button> </td>

                  </tr>
                </tbody>
            </table>
        })}
</div>
 );

}


export default TableMaker;