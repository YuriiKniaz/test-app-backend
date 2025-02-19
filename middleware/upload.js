const path = require('path')
const multer = require('multer')



const multerStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'upload/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: multerStorage,
    
})

module.exports = upload;