const { User } = require('../models/User');
const { Doctor } = require('../models/doctor');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Cryptr = require('cryptr');
const jwt = require('jsonwebtoken');
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

// create new doctor 
router.post('/new_Doctor', async (req, res) => {
    console.log(req);
    let user = await Doctor.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('user already register');
    }

    user = new Doctor({
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