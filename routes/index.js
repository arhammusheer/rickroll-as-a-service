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
  return res.render("index", {
    title: "Roller",
    embed: defaultEmbed,
  });
});

router.get("/roll", (req, res, next) => {
  return res.render("newroll", {
    title: "Roller",
    embed: defaultEmbed,
    csrfToken: req.csrfToken(),
  });
});

router.post("/newroll", (req, res, next) => {
  let roll = new Roll(req.body);
  roll.save();
  return res.redirect(`/disabled/${roll._id}`);
});
router.get("/disabled/:rollid", async (req, res, next) => {
  let rollEmbed = await Roll.findById(req.params.rollid).exec();
  console.log(req.baseUrl);
  res.render("viewroll", {
    roll_link: `https://rolld.ml/${req.params.rollid}`,
    title: "Rolld",
    embed: rollEmbed,
    enabled: false,
  });
});

router.get("/leaderboard", async (req, res, next) => {
  let embedArray = await Roll.find({ counter: { $gt: 0 } }, null, {
    limit: 50,
    sort: {
      counter: -1,
    },
  });
  res.render("leaderboard", {
    embeds: embedArray,
  });
});

router.get("/:rollid", async (req, res, next) => {
  let rollEmbed = await Roll.findById(req.params.rollid).exec();
  if (rollEmbed) {
    rollEmbed.counter = rollEmbed.counter + 1;
    await rollEmbed.save();
    res.render("rolled", { title: "Rolld", embed: rollEmbed, enabled: true });
  } else {
    res.render("error", {
      message: "Your rickroll was not found",
    });
  }
});
module.exports = router;
