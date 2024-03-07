const router = require("express").Router();
const express = require("express");
const places = require("../models/places.js");

router.get("/", (req, res) => {
  res.render("places/index", { places });
});


router.get("/new", (req, res) => {
  res.render("places/new");
});
// or switching new.jsx to views foler and removing the \places or \places/ works as well (try both)
 

// create

router.post("/", (req, res) => {
  // console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

router.use("/places", router);

module.exports = router;
