const {Brand} = require("../models")
require("mysql2")

async function findBrand(brandname){
    const brand = await Brand.findAll({where : {
        name : brandname
    }})

    return brand
}

async function addBrand(brandName){
        const brand = Brand.create({
            name : brandName
        }).catch((err) => {
            if(err) throw new Error('Error1')
        })

        return brand
}

async function modifyBrand(oldName, newName){
    try{
        const brand = await findBrand(oldName)
        await brand[0].update({
            name: newName
        })
        return true
    } catch {
        throw new Error("This brand does not exist")
    }
}

module.exports = {addBrand, findBrand, modifyBrand}