const { User } = require('../models/User');
const { Doctor } = require('../models/doctor');
const { doctorapproval } = require('../models/doctorapproval');
const { Request } = require("../models/request");

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Cryptr = require('cryptr');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const objectId = require('mongodb').ObjectID;
const _ = require('lodash');
//const uuid = require("uuid/v4");
const Stripe = require("stripe")("sk_test_51KbrNJKimnUFu9LYr3mkPxBo2yxzNWJKdVd2WvsqMgmegj16xIUJGtKhuqvU5QKGhe1nXLT1y1Lp0HJHOmAOdmws00hFewmYOG ");


// Create new user//
//router.post('/user/new_user', async (req, res) => {
router.post('/new_user', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('user already register');
    }

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // age: req.body.age,
        // c_password: req.body.c_password,

        contact: req.body.contact,
        userType: req.body.userType,
    });
    const salt = await bcrypt.genSalt(10);//generate a key 
    user.password = await bcrypt.hash(user.password, salt);
    result = await user.save();
    // const token = user.generateAuthToken();
    // res.cookie("jwt", token, {
    //     expires: new Date(Date.now() + 50000),
    //     httpOnly: true
    // });

    // res.header('x-auth-token', token).send(_.pick(user, ["_id", "name", "email", "userType"]));

    if (result) {
        return res.status(200).send('user register');
    }
    else {
        return res.status(400).send('user NOT register');
    }

})
router.get('/getApproval', async (req, res) => {
    
    let doc = await doctorapproval.find()
    await console.log(doc)
     res.send(doc)
})



router.get('/getdoctors', async (req, res) => {
    
    let doc = await Doctor.find()
    await console.log(doc)
     res.send(doc)
})

router.get('/getpatient', async (req, res) => {
    
    let doc = await User.find()
    await console.log(doc)
     res.send(doc)
})

router.get('/getappp', async (req, res) => {
    
    let doc = await Request.find()
    await console.log(doc)
     res.send(doc)
})



router.post('/rejectApproval', async( req,res)=>{
    console.log("rejection is painfull")
    console.log(req.body)

    const user= await doctorapproval.deleteOne(req.body)
    res.send("Request deny")
})





router.post('/accept', async (req, res) => {
    // console.log(req.body);


    let user = req.body;
 
console.log(user)
    user = new Doctor({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        userType: req.body.userType,
        specaility: req.body.specaility,

    });
   
    try {
        result = await user.save();

        const users = await doctorapproval.deleteOne({email: req.body.email})
          console.log(users)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "imed.care22@gmail.com",
                pass: "medcare22"
            }
        });

        const data = {
            from: '"I-MEDCARE"<imed.care22@gmail.com>',
            to: req.body.email,
            subject: "Request Accepted",

            html: `
            <h3> Hello Life Saver, your documents are verified. Thank you for providing us the details. We are happy to have you on bored with us.</h3>
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




        console.log("shdiush")
        return res.status(200).send('Doctor register')

    } catch (error) {
        return res.status(400).send('Doctor NOT register');

    }



})


// create new doctor 
router.post('/new_Doctor', async (req, res) => {
    console.log(req);
    let user = await Doctor.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('user already register');
    }

    user = new doctorapproval({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        userType: req.body.userType,
        specaility: req.body.specaility,

    });
    const salt = await bcrypt.genSalt(10);//generate a key 
    try {
        user.password = await bcrypt.hash(user.password, salt);
        result = await user.save();



        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "imed.care22@gmail.com",
                pass: "medcare22"
            }
        });

        const data = {
            from: '"I-MEDICARE"<imed.care22@gmail.com>',
            to: req.body.email,
            subject: "Request for Documents",

            html: `
            <h3> Thank you life saver for having an intreset in our organization, we are pleasure to have you on bored with us but before this we need your documents for the vefication. Could you please provide us your identity of Doctor  </h3>
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




        
        return res.status(200).send('Doctor register')

    } catch (error) {
        return res.status(400).send('Doctor NOT register');

    }



})

//login user
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });//user patient
    if (!user) {
        const doctor = await Doctor.findOne({ email: req.body.email })

        if (!doctor) {
            return res.status(404).send({ "message": "User not found " });

        }
        else {
            const pass = await bcrypt.compare(req.body.password, doctor.password);//compare the hash value 
            if (pass) {

                return res.status(200).send(doctor);
            }
            else {
                return res.send("Wrong Password")
            }
        }
    }



    else {
        const pass = await bcrypt.compare(req.body.password, user.password);
        if (pass) {

            return res.status(200).send(user);
        }
        else {
            return res.send("Wrong Password")
        }


    }
}
)

router.post('/payment', (req, res) => {
    const { product, token } = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    const idempontencyKey = uuid();

    return Stripe.cusstomers.create({
        email: token.email,
        source: token._id
    }).then(customer => {
        Stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: 'I-MedCare{product.name}',
        }, { idempontencyKey })
    })
        .then(result => res.status(200).json(result))
        .catch(er => console.log(err))
})
module.exports = router;




router.post('/forgetpassword', async (req, res) => {
    console.log(req.body)

    let user = await User.findOne({ email: req.body.email });
    if (user) {


        var otp = Math.floor(Math.random() * 100000) + 1;

        let aaa = await User.updateOne({ email: req.body.email }, { $set: { otp: otp } });
        console.log(aaa);



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
            subject: "OTP for I-MEDCARE",

            html: `
            <h3>here is your OTP "${otp}" to reset your Password</h3>
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

        res.send('Request Done');






    } else {
        let duser = await Doctor.findOne({ email: req.body.email });
        if (duser) {


            var otp = Math.floor(Math.random() * 100000) + 1;

            let aaa = await Doctor.updateOne({ email: req.body.email }, { $set: { otp: otp } });
            console.log(aaa);



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
                subject: "OTP for I-MEDCARE",

                html: `
                <h3>here is your OTP "${otp}" to reset your Password</h3>
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

            res.send('Request Done');

        } else { res.send('user not found'); }
    }


    //else {res.send('user not found');}

})
module.exports = router;


router.post('/forgetpasswordotp', async (req, res) => {
    console.log(req.body)

    let puser = await User.findOne({ email: req.body.email });
    if (puser) {
        let matchotp1 = puser.otp;
        if (matchotp1 == req.body.otp) {


            res.send('Request Done');

        } else { res.send('wrong otp'); }
    } else {


       let  user = await Doctor.findOne({ email: req.body.email });
        let matchotp = user.otp;
        if (matchotp == req.body.otp) {

            res.send('Request Done');


        } else { res.send('wrong otp'); }
    }


   

   

})
module.exports = router;


router.post('/forgetpasswordchange', async (req, res) => {
    console.log(req.body)





    const salt = await bcrypt.genSalt(10);//generate a key 
    req.body.password = await bcrypt.hash(req.body.password, salt);
    console.log(req.body.password)



    let puser = await User.findOne({ email: req.body.email });
    if (puser) { await User.updateOne({ email: req.body.email }, { $set: { password: req.body.password } }); } else {


        await Doctor.updateOne({ email: req.body.email }, { $set: { password: req.body.password } });
    }






    res.send('Request Done');




})
module.exports = router;