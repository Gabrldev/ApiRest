const fs = require('fs');
const express = require('express');
const router = express.Router();


const pathRouter = `${__dirname}`

const removeExtension = (fileName)=>{
    return fileName.split('.').shift()
}
fs.readdirSync(pathRouter).filter((file)=>{
    const fileWithOutExtension = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExtension)
    if(!skip){
        router.use(`/${fileWithOutExtension}`, require(`./${fileWithOutExtension}`))
        console.log('Ruta cargada:--->', fileWithOutExtension);
    }
})

module.exports = router;