const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors =require('cors');

//This import represents -->Food.js
const FoodModel = require('./models/Food')

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://yuksel:1234@crud.k0ijv9a.mongodb.net/food",{
    useNewUrlParser : true
})

app.post('/insert', async (req,res) =>{

    const foodName =req.body.foodName
    const days =req.body.days
 
    const food = new FoodModel({
        foodName:foodName,daysSinceIAte:days
    });

    try{
        await food.save();
        res.send('inserted data');
    }catch(err){
        console.log(err)
    }
});

app.get('/read', async (req,res) =>{
    FoodModel.find({/*$where: {foodName:"Apple"}*/},(err,result) => {
        if(err){
            res.send(err)
        }

        res.send(result)
    });
});

app.listen(3001,() =>{
    console.log("running");

});

