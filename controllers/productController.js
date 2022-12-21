const {findProduct, addProduct, updatePrice} = require("./productService")
const {findBrand} = require('./brandService')

async function createProduct(req, res){
    const {name, price, brandName} = req.body

    try{
        let brandId = await findBrand(brandName)
        brandId = brandId[0].dataValues.id

        const product = await addProduct(name, price, brandId)
        if(product)  return res.json({message: "Product was added"})
        return res.json({message: "Error"})
        } catch(err) {
            return res.json({message: err.message})
        }
}

async function deleteProduct(req, res){
    const {name} = req.body

    try{
        const product = await findProduct(name)
        await product.destroy()

        return res.json({message : "Product was deleted"})

    } catch(err){
        return res.json({message : err.message})
    }
}

async function updateProduct(req, res){
    const {name, newPrice} = req.body

    try{
        await updatePrice(name, newPrice)
        return res.json({message: "Succesufully updated"})
    } catch(err){
        return res.json({message: err.message})
    }
}


module.exports = {createProduct, deleteProduct, updateProduct}