const express = require("express");
const sseExpress = require("sse-express");
const Students = require("../models/Students");

const router = express.Router();

router.post("/", (req, res) => {
  const students = new Students({
    from: req.body.from,
    to: req.body.to,
    profilepic:{type:urlencoded},
    fromName: req.body.fromName,
    time: req.body.time,
    acceptStatus: req.body.acceptStatus,
    startStatus: req.body.startStatus,
    appointmentType: req.body.appointmentType,
  });

  students
    .save()
    .then((result) => {
      res.send({
        message: "Students created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/Students
router.get("/", (req, res) => {
    students.find()
    .then((Students) => {
      res.send(Students);
    })
    .catch((err) => console.log(err));
});



// /api/Students/requests/id
router.get('/requests/:id', (req, res) => {
  const stuId = req.params.id;

  Students.find({to: stuId})
      .then(appointment => {
          if(appointment) {
            res.send(appointment);
          }
          else {
            console.log("No Students for Students Id ",stuId, " found");
             res.send({
             message: "No Students for Students Id found",
             data: []
           });
          }
      })
      .catch(err => console.log(err))
});


module.exports = router;
