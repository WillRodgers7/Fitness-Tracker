// Add Stuff
const path = require("path");
const router = require("express").Router();
const Workout = require("../models/workout.js");


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbworkouts => {
        res.json(dbworkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbworkouts => {
        res.json(dbworkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then(dbworkouts => {
        res.json(dbworkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
    .then(dbworkouts => {
        res.json(dbworkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;