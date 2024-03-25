const Product = require("../src/product.model");

const createProduct = async(req, res)=>{
    try{
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

const getProducts = async (req, res) =>{
    try{
        const products = await Product.findAll();
        if (products.length == 0){
            res.status(404).json({message: 'Produits introuvables'});
        } 
        res.status(200).json(products);
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

const getProductById = async (req, res) =>{
    try{
        const product = await Product.findOne({ where:{id: req.params.id}});  
        res.status(200).json(product);
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

const updateProduct = async (req, res) =>{
    try{
        const product = await Product.update(req.body,{where: {id:req.params.id}});
        res.status(200).json({message:`Le produit a été modifié! `});
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

const deleteProduct = async(req, res) =>{
    try{
        const product = await Product.destroy({where: {id:req.params.id}});
        res.status(200).json({message:`Le produit a été supprimé! `});
    }catch (error){
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports ={createProduct, getProducts, getProductById, updateProduct, deleteProduct}