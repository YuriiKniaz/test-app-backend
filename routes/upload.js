const express = require('express');
const router = express.Router();
const uploadCtrl = require('../controllers/upload');
const upload = require('../middleware/upload');

router.post('/upload', upload.single('file'), uploadCtrl);

module.exports = router;
