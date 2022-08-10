const express = require("express");
const sseExpress = require("sse-express");
const Event = require("../models/Event");

const router = express.Router();

router.post("/", (req, res) => {
  const event = new Event({
    profilepic: req.body.profilepic,
    to: req.body.to,
    fromName: req.body.fromName,
    time: req.body.time,
    acceptStatus: req.body.acceptStatus,
    startStatus: req.body.startStatus,
    appointmentType: req.body.appointmentType,
  });

  event
    .save()
    .then((result) => {
      res.send({
        message: "Event created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/Event
router.get("/", (req, res) => {
    Event.find()
    .then((Alumini) => {
      res.send(Alumini);
    })
    .catch((err) => console.log(err));
});



// /api/Event/requests/id
router.get('/requests/:id', (req, res) => {
  const eventId = req.params.id;

  Event.find({to: eventId})
      .then(appointment => {
          if(appointment) {
            res.send(appointment);
          }
          else {
            console.log("No Event for EventId ",eventId, " found");
             res.send({
             message: "NoEvent for Event Id found",
             data: []
           });
          }
      })
      .catch(err => console.log(err))
});


module.exports = router;
