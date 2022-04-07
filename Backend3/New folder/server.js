//
const express = require("express");
const mongoose = require("mongoose");
const appointment = require('./routes/appointments');
const doctor = require('./routes/doctors');
const user = require("./routes/users");
const cors = require('cors');//intergation not found
const request = require("./routes/requests");
const fileupload = require("express-fileupload");
const multer = require('multer');
const app = express();
app.use(express.json());
app.options('*', cors());
app.use(cors());

// const url = 'mongodb://localhost:27017/i_medicare';
// const url = 'mongodb+srv://jabbar:6MFOKZHhn5A4yzu2@cluster0.glxdr.mongodb.net/I-medicare?retryWrites=true&w=majority';
//const url = 'mongodb+srv://Yusrakhan:fyp-1@cluster0.yqvex.mongodb.net/I-MedCare?retryWrites=true&w=majority';
const url = 'mongodb+srv://yusrakhan:fyp-1@cluster0.ayerk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//  const url ='mongodb+srv://Yusra:yusra@cluster0.bvoex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}
)
    .then(() => { console.log("successfully connect to cloude") })
    .catch((err) => { console.error("Not connect to db", err) });

const con = mongoose.connection
con.on('open', function () {
    console.log('connected to database')
})
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + ",txt")
        }
    })
}).single("fileupload");
app.post('/', upload, (req, res) => {
    res.send("upload")
})
app.use('/user', user);
app.use('/doctor', doctor)
app.use('/appointment', appointment);
app.use('/request', request)
app.get('/', (req, res) => {
    res.send("welcome")
})
const port = 5000;
app.listen(port, () => console.log(`listening port ${port}`));