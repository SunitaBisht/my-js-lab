const weather = require("./weather.js");
//join multiple values passed as arguments and replace all spaces with underscore
const query = process.argv.slice(2).join("_").replace(" ", "_");
//query: 98261
//query: cleveland-oh
//query: Landon-England
weather.get(query); //pass the query in weather modules
