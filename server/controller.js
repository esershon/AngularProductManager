var Products = require('./models');

module.exports = {

    getAllProducts:(req, res)=>{
        Products.find({})
            .then(products=>res.json(products))
            .catch(err =>res.json(err))
    },

    getProduct:(req,res)=>{
        Products.findById(req.params.id)
            .then(product=>res.json(product))
            .catch(err=>res.json(err))
    },

    createProduct:(req, res)=>{
        Products.create(req.body)
            .then(product=>res.json(product))
            .catch(err=>res.json(err))
    },

    updateProduct:(req, res)=>{
        //new=true indicates that I'm returning the updated document rather than the original, and runValidators=true indicated that I want the updates information to be run thru the Schema's validations
        Products.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(product=>res.json(product))
            .catch(err=>res.json(err))
    },

    deleteProduct:(req, res)=>{
        Products.findByIdAndDelete(req.params.id)
            .then(product=>res.json(product))
            .catch(err=>res.json(err))
    },
}