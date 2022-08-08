const express = require("express");
const sseExpress = require("sse-express");
const Blogs = require("../models/Blogs");

const router = express.Router();

router.post("/", (req, res) => {
  const blogs = new Blogs({
    profilepic: req.body.profilepic,
    to: req.body.to,
    fromName: req.body.fromName,
    time: req.body.time,
    acceptStatus: req.body.acceptStatus,
    startStatus: req.body.startStatus,
    appointmentType: req.body.appointmentType,
  });

  blogs
    .save()
    .then((result) => {
      res.send({
        message: "Blogs created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/Blogs
router.get("/", (req, res) => {
    Blogs.find()
    .then((Alumini) => {
      res.send(Alumini);
    })
    .catch((err) => console.log(err));
});



// /api/Blogs/requests/id
router.get('/requests/:id', (req, res) => {
  const blogId = req.params.id;

  Blogs.find({to: blogId})
      .then(appointment => {
          if(appointment) {
            res.send(appointment);
          }
          else {
            console.log("No Blogs for BlogsId ",blogId, " found");
             res.send({
             message: "NoBlogs for Blogs Id found",
             data: []
           });
          }
      })
      .catch(err => console.log(err))
});


module.exports = router;
