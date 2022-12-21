const {Product} = require("../models")
require("mysql2")

async function findProduct(name){
    const product = await Product.findOne({where : {
        name : name
    }})
    return product
}

async function addProduct(name, price, brandId){
    await Product.create({
        name : name,
        cost : price,
        BrandId : brandId
    }).catch((err) => {
        if(err) throw new Error('Error')
    })
    return true
}

async function updatePrice(name, newPrice){
    try{
        const product = await findProd(name)

        await product.update({
            cost : newPrice
        })
        return true
    }catch{
        throw new Error('That product does not exist')
    }
}



module.exports = {findProduct, addProduct, updatePrice}