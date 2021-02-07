const express = require("express");
const router = express.Router();
const csrf = require("csurf");

const csrfProtection = csrf({ cookie: true });

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Express",
    embed: {
      site_name: "Croissant world",
      title: "The amazing world of croissant",
      description:
        "This webpage is about the amazing world of croissant and how it'll change you from a human to a croissant",
      image: "/images/croissant-1.jpg",
      link: "#",
    },
  });
});

module.exports = router;
