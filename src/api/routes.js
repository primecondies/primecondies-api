const express = require('express');
const router = express.Router();
const auth = require('../config/passport');


router.get("/", (req, res) => {
  res.json({
    "message" : "The Condies Are Prime!"
  });
});

/* Places Routes */
const getPlaces = require('./places/places.get');
router.route('/places')
  .get(getPlaces);

/* Place Routes */
const getPlace = require('./place/place.get');
router.route('/place')
  .get(getPlace);


module.exports = router;