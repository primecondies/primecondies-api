const Place = require("../../models/place");

/** Handler for GET to /place*/
var getPlace = ("/",
(req, res, next) => {
  let location = req.query.location;

  // Only accept input that exists or that is not an Array
  if (!location || Array.isArray(location)) {
    next();
    return;
  }

  Place.findOne({ location: location }, (err, place) => {
    if (err) {
      next();
      console.log(err);
      throw new Error(err);
    }

    // Only return JSON if place was found in the database
    if (!place) {
      next();
      return;
    }

    return res.json(place);
  });
});

module.exports = getPlace;
