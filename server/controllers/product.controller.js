const Product = require('../models/product.model');

module.exports = {

    getAllProducts:(req,res)=>{                 // getting all products
        Product.find({})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{console.log(err)})
    },

    getOneProduct:(req,res) => {                // get one product by id
        Product.findOne({_id:req.params.id})
            .then((oneProduct) => {
                res.json(oneProduct)
            })
            .catch((err) => {res.json(err)});
    },    

    createProduct:(request, response) => {      // function creating a new product, adding it to our res.json
        Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
    },

    updateProduct:(req,res) => {                // update a product
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
    },

    deleteProduct:(req,res) => {                //delete a product
        Product.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
    }
}
