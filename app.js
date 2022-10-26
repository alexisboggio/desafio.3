const express = require('express');
require('dotenv').config();
const app = express();
const products = require('./test')
const productos = require('./productos')

app.get('/producto',(_req, res) => {
    try{
        res.status(200).json({
            success: 'True',
            data: productos
        })
    }catch(err){
        res.status(500).json({
            success: 'false',
            error: err.mesagge
        })
    }
})

app.get('/productoRandom', (_req, res) => {
    try{
        let productRandom = productos[Math.floor(Math.random() * productos.length)]
        res.status(200).json({
            success: 'True',
            random: productRandom
        })
    }catch(err){
        res.status(500).json({
            success: 'false',
            error: err.message
        })
    }
})

app.get('/productos', async(_req,res) => {
    try{
        const data = await products.getAll();
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400).json({
                success: 'False',
                error: 'no hay productos'
            })
        }
    }catch(err){
        res.status(200).json({
            success: 'false',
            error: err.message
        })
    }
})

module.exports = app