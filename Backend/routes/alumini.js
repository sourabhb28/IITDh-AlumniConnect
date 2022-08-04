const express = require("express");
const sseExpress = require("sse-express");
const Alumini = require("../models/Alumini");

const router = express.Router();

router.post("/", (req, res) => {
  const alumini = new Alumini({
    from: req.body.from,
    to: req.body.to,
    fromName: req.body.fromName,
    time: req.body.time,
    acceptStatus: req.body.acceptStatus,
    startStatus: req.body.startStatus,
    appointmentType: req.body.appointmentType,
  });

  alumini
    .save()
    .then((result) => {
      res.send({
        message: "Alumini created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/Alumini
router.get("/", (req, res) => {
    Alumini.find()
    .then((Alumini) => {
      res.send(Alumini);
    })
    .catch((err) => console.log(err));
});



// /api/Alumini/requests/id
router.get('/requests/:id', (req, res) => {
  const aluId = req.params.id;

  Alumini.find({to: aluId})
      .then(appointment => {
          if(appointment) {
            res.send(appointment);
          }
          else {
            console.log("No Alumini for Alumini Id ",aluId, " found");
             res.send({
             message: "No Alumini for Alumini Id found",
             data: []
           });
          }
      })
      .catch(err => console.log(err))
});


module.exports = router;
