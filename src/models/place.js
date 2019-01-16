var mongoose = require("mongoose");

var placeSchema = new mongoose.Schema({
  location: String,
  latitude: String,
  longitude: String,
  currently: {
    time: Number,
    summary: String,
    icon: String,
    nearestStormDistance: Number,
    precipIntensity: Number,
    precipIntensityError: Number,
    precipProbability: Number,
    precipType: String,
    temperature: Number,
    apparentTemperature: Number,
    dewPoint: Number,
    humidity: Number,
    pressure: Number,
    windSpeed: Number,
    windGust: Number,
    windBearing: Number,
    cloudCover: Number,
    uvIndex: Number,
    visibility: Number,
    ozone: Number
  },
  hourlySummary: String,
  hourlyIcon: String,
  hourly: [
    {
      time: Number,
      nearestStormDistance: Number,
      precipIntensity: Number,
      precipIntensityError: Number,
      precipProbability: Number,
      precipType: String,
      temperature: Number,
      apparentTemperature: Number,
      dewPoint: Number,
      humidity: Number,
      pressure: Number,
      windSpeed: Number,
      windGust: Number,
      windBearing: Number,
      cloudCover: Number,
      uvIndex: Number,
      visibility: Number,
      ozone: Number
    }
  ],
  dailySummary: String,
  dailyIcon: String,
  daily: [
    {
      time: Number,
      sunriseTime: Number,
      sunsetTime: Number,
      precipIntensity: Number,
      precipIntensityMax: Number,
      precipIntensityMaxTime: Number,
      precipProbability: Number,
      precipType: String,
      temperatureHigh: Number,
      temperatureHighTime: Number,
      temperatureLow: Number,
      temperatureLowTime: Number,
      apparentTemperatureHigh: Number,
      apparentTemperatureHighTime: Number,
      apparentTemperatureLow: Number,
      apparentTemperatureLowTime: Number,
      humidity: Number,
      windSpeed: Number,
      windGust: Number,
      windGustTime: Number,
      windBearing: Number,
      cloudCover: Number,
      visibility: Number,
      temperatureMin: Number,
      temperatureMinTime: Number,
      temperatureMax: Number,
      temperatureMaxTime: Number,
      apparentTemperatureMin: Number,
      apparentTemperatureMinTime: Number,
      apparentTemperatureMax: Number,
      apparentTemperatureMaxTime: Number
    }
  ]
});

var Place = mongoose.model("Place", placeSchema);

module.exports = Place;
