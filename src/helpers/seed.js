const mongoose = require("mongoose"),
      Place = require("./src/models/place");

// Fake data
var placeData = {
  location: "Test Location",
  latitude: "0.000",
  longitude: "0.000",
  currently: {
    time: "test",
    summary: "test",
    icon: "test",
    precipProbability: 0,
    precipType: "Rain",
    temperature: "100",
    humidity: 0,
    windSpeed: 0,
    windBearing: 0,
    cloudCover: 0
  },
  hourly: [{
    time: "test",
    summary: "test",
    icon: "test",
    precipProbability: 0,
    precipType: "Rain",
    temperature: "100",
    humidity: 0,
    windSpeed: 0,
    windBearing: 0,
    cloudCover: 0
  }, {
    time: "test",
    summary: "test",
    icon: "test",
    precipProbability: 0,
    precipType: "Rain",
    temperature: "100",
    humidity: 0,
    windSpeed: 0,
    windBearing: 0,
    cloudCover: 0
  }]
};


function seedDB () {
  // Clear all data from database
  Place.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    } else {
      console.log("All places removed from database");

      // Add test location to the development database
      // var newPlace = new Place(placeData);
      // newPlace.save();
    
      console.log("Database seeded.");
    }
  });

}

module.exports = seedDB;