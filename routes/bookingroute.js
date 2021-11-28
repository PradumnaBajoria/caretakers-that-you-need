const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser")
const bookings = require("../models/booking")

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/getbook', (req, res) => {
    try {
        bookings.find().then(foundbook => res.json(foundbook))
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/createbook", async(req, res) => {
    try {
        console.log(req.body.parents)
        console.log(req.body)
        if (!req.body.parents || !req.body.child || !req.body.email || !req.body.status || !req.body.fee) {
            return res.status(400).json({ error: "type/amount Missing..!!" })
        }
        const newbook = new bookings({
            parents: req.body.parents,
            child: req.body.child,
            email: req.body.email,
            arrival: req.body.arrival,
            departure: req.body.departure,
            fee: req.body.fee,
            status: req.body.status,
            advise: req.body.advise
        })
        console.log(req.body.child)
        newbook.save().then(data => {
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

router.delete("/delbook/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log("atleaast inside")
            console.log(temp)
            const result = await bookings.findByIdAndDelete(temp);
            console.log(result);
            res.status(200).json({ message: "RecordinBooking..!!" });
        } else {
            res.status(404).json({ message: "No Such Recording Exist..!!" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

router.patch("/editbook/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log(temp)
            const result = await bookings.findByIdAndUpdate(temp, req.body, { new: true });
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