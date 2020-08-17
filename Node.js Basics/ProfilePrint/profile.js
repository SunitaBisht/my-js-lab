//Basic of Node.js------------------------------------------------------------------------

/* console.log("hello World!");
console.error("Oops something wrong!");
console.dir({ name: "sunita", age: 22 }); */

//------------------------------------------------------------------------------------------------------
//problem: we need a simple way to look at a users badge count and javascripts points
//Solution:Use Nodejs to connect API to get profile information to print out
//--------------------------------------------------------------------------------------------
//Function to print message to console

//require https module
const https = require("https");
//require http module for status codes
const http = require("http");
//Print Error message
function printError(error) {
  console.error(error.message);
}
//const { error } = require("console");
//function to print message in console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in javaScript`;
  console.log(message);
}

function get(username) {
  try {
    //connect to the API url:(https://teamtreehouse.com/username.json)
    const request = https.get(
      `https://teamtreehouse.com/${username}.json`,
      (response) => {
        //console.log(response.statusCode);
        if (response.statusCode === 200) {
          let body = "";
          //read the data
          response.on("data", (data) => {
            body += data.toString();
          });
          response.on("end", () => {
            try {
              //parse the data
              const profile = JSON.parse(body);
              //print the data
              printMessage(
                username,
                profile.badges.length,
                profile.points.javascript
              );
            } catch (error) {
              printError(error);
            }
          });
        } else {
          const message =
            "There was an error getting the profile for ${username} ($(http.STATUS_CODES[response.statusCode]})";
          const statusCodeError = new Error(Message);
          printError(statusCodeError);
        }
      }
    );

    //for error display in console
    request.on("error", printError);
  } catch (error) {
    printError(error);
  }
}

module.exports.get = get;
