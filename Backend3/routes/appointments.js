const express = require('express');

const { Appointment } = require('../models/appointment');
const router = express.Router();


router.post("/new_app", async (req, res) => {
    const patiet_id = req.user._id;
    const doctor_id = req.doctor._id;
    Appointment.findOne({ user: patiet_id, doctor: doctor_id, day: req.body.day, time: req.body.time, date: req.body.date }, (err, doc) => {
        if (doc) {
            res.send("Appointment Already done! ")
        }
        else {
            const appointment = new Appointment({
                user: patiet_id,
                doctor: doctor_id,
                day: req.body.day,
                time: req.body.time,
                date: req.body.date,
            })
            result = appointment.save();
            if (result) {
                return res.status(200).send(result);
            }
            else {
                return res.status(400).send('Appoitment NOT register');
            }
        }
    })
        .populate('User')
        .populate('doctor')
})

module.exports = router;