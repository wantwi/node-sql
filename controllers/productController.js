const db = require("../models/index.js")

console.log({db})

//create main model
const Product = db.products 
const Committee = db.committee


//1. add product

const addProduct = async (req,res)=>{
    let productData ={
        title:"First Product",
        price:2303,
        description:"Test add product",
        publishe:req.body.publishe ? req.body.publishe : false
    }
    try {
        const product = await Product.create(productData)

        
        res.status(200).send(product)
        
    } catch (error) {
        
    }
}

//2. get all product

const getProducts = async (req,res)=>{
    console.log(req.url)
   
    try {
        const products = await Product.findAll({})
        if(!products){
            console.log("something is wrong");
        }
        res.status(200).send(products)
        
    } catch (error) {
        
    }
}

module.exports ={
    addProduct,
    getProducts
}