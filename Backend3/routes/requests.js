const { Request } = require("../models/request");
const express = require('express');
const { Router } = require("express");
const nodemailer = require('nodemailer');
const router = express.Router();


router.post('/new_req', async (req, res) => {
    let user = await Request.findOne({ patient: req.body.patient, doctor: req.body.doctor, Date: req.body.date, Time: req.body.time, statu: "pending" });
    if (user) {
        return res.status(400).send('Request Already Done');
    }

    user = new Request({
        patient: req.body.patient,
        doctor: req.body.doctor,
        Date: req.body.date,
        Time: req.body.time,
        status: "pending"
    });

    result = await user.save();
    if (result) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "yusrashahid2019@gmail.com",
                pass: "yusrakhan#1"
            }
        });

        const data = {
            from: '"I-MEDICARE"<yusrashahid2019@gmail.com>',
            to: req.body.email,
            subject: "Request for appointment",

            html: `
            <h2>Hey ${req.body.patient}</h2>
            <p>Hope You are Good</p>
            <p>Your request For online appoitment with Doctor "<b>${req.body.doctor}</b>"at "<b>${req.body.time}</b>" on "<b>${req.body.date}</b>" has been delieverd </p>
            <p></p>
            
            `
        }
        transporter.sendMail(data, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent ' + info.response)
                res.send("successfully send")
            }
        })

        return res.status(200).send('Request Done');
    }
    else {
        return res.status(400).send('Request Not Done');
    }

})


router.get('/getrequest/:doctorName', async (req, res) => {
    console.log(req.params.doctorName)
    try {
        const doc = await Request.find({ doctor: req.params.doctorName })
        console.log(doc)
        res.status(200).send(doc);

    }
    catch {
        res.status(400).send('Doctor Have no Record yet');
    }
})
module.exports = router;