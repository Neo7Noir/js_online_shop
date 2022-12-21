const {addBrand, findBrand, modifyBrand} = require('./brandService')

async function createBrand(req, res){
    const{name} = req.body

    try{
        const brand = await addBrand(name)

        if(brand)  return res.json({message: "Brand was added"})
    } catch(err) {
        return res.json({message: err.message})
    }
}

async function deleteBrand(req, res){
    const {name} = req.body

    try{
        const brand = await findBrand(name)
        await brand[0].destroy()

        return res.json({message: "Brand was deleted"})
    } catch(err) {
        return res.json({message: err.message})
    }
}

async function updateBrand(req, res){
    const {oldName, newName} = req.body

    try{
        await modifyBrand(oldName, newName)
        
        return res.json({message: "Brand was updated"})
    } catch(err) {
        return res.json({message: err.message})
    }
}

module.exports = {createBrand, deleteBrand, updateBrand}