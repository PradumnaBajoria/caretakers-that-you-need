const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser")
const child = require("../models/child")

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/getchild', (req, res) => {
    try {
        child.find().then(foundchild => res.json(foundchild))
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/createchild", async(req, res) => {
    try {
        console.log(req.body.parent)
        console.log(req.body)
        if (!req.body.parent || !req.body.child || !req.body.email || !req.body.age) {
            return res.status(400).json({ error: "type/amount Missing..!!" })
        }
        const newchild = new child({
            parent: req.body.parent,
            child: req.body.child,
            email: req.body.email,
            age: req.body.age,
            gender: req.body.gender
        })
        console.log(req.body.child)
        newchild.save().then(data => {
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

router.delete("/delchild/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log("atleaast inside")
            console.log(temp)
            const result = await child.findByIdAndDelete(temp);
            console.log(result);
            res.status(200).json({ message: "Recordinchilding..!!" });
        } else {
            res.status(404).json({ message: "No Such Recording Exist..!!" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

router.patch("/editchild/:id", async(req, res) => {
    try {
        const temp = req.params.id;
        if (temp !== null) {
            console.log(temp)
            const result = await child.findByIdAndUpdate(temp, req.body, { new: true });
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