const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.json({
    "message" : "The Condies Are Prime!"
  });
});

/** places routes */
const getPlaces = require("./places/places.get");
router.route("/places")
  .get(getPlaces);

/* place routes */
const getPlace = require("./place/place.get");
router.route("/place")
  .get(getPlace);


module.exports = router;