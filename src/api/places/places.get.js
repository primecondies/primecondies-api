const Place = require("../../models/place");

var getPlaces = ("/", (req, res, next) => {
  Place.find({}, (err, places) => {
    if (err) { throw new Error(err); }

    return res.json(places);
  }); 
}); 

module.exports = getPlaces;