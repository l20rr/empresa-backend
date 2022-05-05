const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_produto:String,
    descricao_produto:String,
    preco_produto:Number,
    qtd_produto:{type:Number,default:0},
    numero_produto: {type:Number,default:0},
    valor_produto: Number,
},{
    timestamps:true
});

const produtos = mongoose.model('Produtos',DataSchema);
module.exports = produtos;