const express = require('express');
const router =new express.Router();
const StaticData = require("./../Model/Db")
const {addData, addData2, putData,deleteData} = require("./../Controller/restgetdatcontroller")



//post
router.post('/addData',addData);
router.post('/addData2',addData2);


//Delete
router.delete('/deleteData/:id',deleteData);


//put
router.put('/putdata/:id',putData);


// GET: Retrieve all StaticData entries
router.get('/staticdata', async (req, res) => {
    try {
        const staticData = await StaticData.find();
        res.status(200).send(staticData);
    } catch (error) {
        res.status(500).send(error);
    }
});





// GET: Retrieve a single StaticData entry by ID
router.get('/staticdata/:id', async (req, res) => {
    try {
        const staticData = await StaticData.findById(req.params.id);
        if (!staticData) {
            return res.status(404).send();
        }
        res.status(200).send(staticData);
    } catch (error) {
        res.status(500).send(error);
    }
});



module.exports = router;