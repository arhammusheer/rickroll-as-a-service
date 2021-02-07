const express = require("express");
const router = express.Router();
const csrf = require("csurf");
const Roll = require("../models/Roll");

const csrfProtection = csrf({ cookie: true });

const defaultEmbed = {
  site_name: "Croissant world",
  title: "The amazing world of croissant",
  description:
    "This webpage is about the amazing world of croissant and how it'll change you from a human to a croissant",
  image_url: "/images/croissant-1.jpg",
  link: "#",
};

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Roller",
    embed: defaultEmbed,
  });
});

router.get("/roll", csrfProtection, (req, res, next) => {
  res.render("newroll", {
    title: "Roller",
    embed: defaultEmbed,
    csrfToken: req.csrfToken()
  });
});

router.post("/newroll",csrfProtection, (req, res, next) => {
  let roll = new Roll(req.body);
  roll.save();
  res.redirect("/");
});

module.exports = router;
