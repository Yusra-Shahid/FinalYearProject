const { Request } = require("../models/request");
const express = require('express');
const { Router } = require("express");
const nodemailer = require('nodemailer');
const router = express.Router();



router.post('/appp', async (req, res) => {

    console.log(req.body)
    let user = await Request.find({ email: req.body.email });
    res.send(user)


})


router.post('/dappp', async (req, res) => {

    console.log(req.body)

    let user = await Request.find({ doctoremail: req.body.email });
    res.send(user)


})

router.post('/new_req', async (req, res) => {

    console.log(req.body)
    let user = await Request.findOne({ doctoremail: req.body.doctoremail, doctor: req.body.doctor, Date: req.body.date, Time: req.body.time, statu: "pending", email: req.body.email });
    if (user) {
        return res.status(400).send('slot not avaiable');
    }else {




    user = new Request({
        patient: req.body.patient,
        doctor: req.body.doctor,
        doctoremail: req.body.doctoremail,
        Date: req.body.date,
        Time: req.body.time,
        status: "pending",
        email: req.body.email
    });

    result = await user.save();
    if (result) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "imed.care22@gmail.com",
                pass: "medcare22"
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
    }}

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