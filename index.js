const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes =  require('./src/routes');

const option = {
    origin:"http://localhost:3001"
}

const app = express();
const port = 3000 || 5000;

mongoose.connect('mongodb://localhost:27017/crudmern',{
    useUnifiedTopology:true,
    useNewUrlParser:true
    //useFindAndModify:false
},function (err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB CONECTADO com sucesso!')
    }
});

app.use(cors(option));

app.use(express.json());
app.use(routes);


app.listen(port,function(){
    console.log(`Server runing on port ${port}`)
});