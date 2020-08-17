//require https module
const https = require("https");
//require http module for status codes
const http = require("http");
const querystring = require("querystring");
const api = require("./api.json");

//print out error message
function printError(error) {
  //display the message from error object
  console.error(error.message);
}

//print out temp details
function printWeather(weather) {
  const message = `Currect temperature in ${weather.location.city} is ${weather.currect_observation.temp_f}F`;
  console.log(message);
}

function get(query) {
  //Take out underscore for readability
  const readableQuery = query.replace("_", " ");
  try {
    const request = https.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.json}`,
      (response) => {
        if (response.statusCode === 200) {
          let body = "";
          //read the data
          response.on("data", (chunk) => {
            body += chunk;
          });
          response.on("end", () => {
            try {
              //parse data
              const weather = JSON.parse(body);
              //check if the location was found before printing
              if (weather.location) {
                //print the data
                printWeather(weather);
              } else {
                const queryError = new Error(
                  `The location "${readableQuery}" was not found.`
                );
                printError(queryError);
              }
            } catch (error) {
              //parse error
              printError(error);
            }
          });
        } else {
          //status code error
          const statusErrorCode = new Error(
            `There was an error getting the message for "${query}". (${
              http.STATUS_CODES[response.statusCode]
            })`
          );
          printError(statusErrorCode);
        }
      }
    );
  } catch (error) {
    printError(error);
  }
}

module.exports.get = get;
