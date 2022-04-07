
const { Doctor } = require('../models/doctor');
const express = require('express');
const router = express.Router();



//get all doctors
router.get('/getDoctor', async (req, res) => {
    let doc = Doctor.find()
    res.send(doc)
})
//get by email
router.get('/getDoctor/:email', async (req, res) => {
    try {
        let doc = await Doctor.find({ email: req.params.email })
        console.log({ doc })
        res.send(doc[0])
    } catch (error) {
        res.send("not found")
    }

})

router.put('/update_doctor', async (req, res) => {
    try {
        const user = await Doctor.findByIdAndUpdate(req.body._id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                specaility: req.body.specaility,
                age: req.body.age,
                exprience: req.body.exprience,
                fee: req.body.fee,
                account: req.body.account,
                timeslote: req.body.timeslote
            }
        }, { new: true })
        res.send("update");
    } catch (error) {
        res.send("something wrong")
    }


})


//get Specific specialist
router.get('/getspecialist/:specaility', async (req, res) => {
    try {
        const doc = await Doctor.find({ specaility: req.params.specaility })
        console.log(doc)
        res.status(200).send(doc);

    }
    catch {
        res.status(400).send('Doctor Not Found');
    }
})

module.exports = router;