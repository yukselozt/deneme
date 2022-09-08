const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors =require('cors');

const redis = require("redis");

//This import represents -->Food.js
const FoodModel = require('./models/Food');
const { response } = require('express');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Can:1234@cluster0.1keofnq.mongodb.net/food",{
    useNewUrlParser : true
});

const client = redis.createClient({
    socket: {
      host: "2.12.100.142",
      port: 6379
    },
  });

/*;( async() => {
 await client.connect(() => {
    console.log('gggg')
 });
})()*/


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

app.put('/update', async (req,res) =>{

    const newFoodName =req.body.newFoodName
    const id =req.body.id
 
    try{
        await FoodModel.findById(id,(err,updatedFood) => {
            updatedFood.foodName=newFoodName;
            updatedFood.save();

            res.send("update");
            
        })
    }catch(err){
        console.log(err)
    }
});

app.put('/update2', async (req,res) =>{

    const newQuantity =req.body.newQuantity
    const id =req.body.id

    try{
        await FoodModel.findById(id,(err,updatedQuantity) => {
            
            updatedQuantity.daysSinceIAte=newQuantity;
            updatedQuantity.save();

            
            res.send("update2");
            
        })
    }catch(err){
        console.log(err)
    }
});

app.delete("/delete/:id", async(req,res) => {
    const id = req.params.id;
    await FoodModel.findByIdAndRemove(id).exec();
    res.send("deleted")    
})

app.listen(3001,() =>{
    console.log("running");

});

app.get('/getData', async (req,res) =>{
    await client.connect();
    const currentvalue = await client.get('framework21');
    console.log(currentvalue + ' geldi oh');
    res.json(currentvalue);
    await client.quit();
 });


 app.post('/setData', async (req,res) =>{
    await client.connect();
    const setValue = await client.set("framework21");
    console.log(setValue + ' Ekleme yapıldı');
    res.json(setValue);
    await client.quit();
 });

