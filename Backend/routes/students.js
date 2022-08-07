const express = require("express");
const sseExpress = require("sse-express");
const Students = require("../models/Students");

const router = express.Router();

router.post("/", (req, res) => {
  const students = new Students({
    userId: req.body.userId,
    batch:req.body.batch,
    
    studentName: req.body.Name,
    
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
    Students.find()
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
