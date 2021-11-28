const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser")
const users = require("../models/user")

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/getuser', (req, res) => {
    try {
        users.find().then(founduser => res.json(founduser))
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/createuser", async(req, res) => {
    try {
        console.log(req.body.parents)
        console.log(req.body)
        if (!req.body.Name || !req.body.phoneNumber || !req.body.email || !req.body.gender || !req.body.age) {
            return res.status(400).json({ error: "type/amount Missing..!!" })
        }
        const newuser = new users({
            Name: req.body.Name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            gender: req.body.gender,
            age: req.body.age,
            experience: req.body.experience
        })
        console.log(req.body.child)
        newuser.save().then(data => {
            res.status(200).json({
                message: "Transaction saved successfully",
                data
            });
            // console.log(json(data));
        }).catch(error => { res.status(500).json(error) })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete("/deluser/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log("atleaast inside")
            console.log(temp)
            const result = await users.findByIdAndDelete(temp);
            console.log(result);
            res.status(200).json({ message: "Recordinusering..!!" });
        } else {
            res.status(404).json({ message: "No Such Recording Exist..!!" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

router.patch("/edituser/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log(temp)
            const result = await users.findByIdAndUpdate(temp, req.body, { new: true });
            console.log(result);
            res.status(200).json({ message: "NewName Updated..!!" });
        } else {
            res.status(404).json({ message: "No Such Recording Exist..!!" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;