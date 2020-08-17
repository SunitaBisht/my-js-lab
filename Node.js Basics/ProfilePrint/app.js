const profile = require("./profile.js");
//console.log(process.argv);
const users = ["chalkers", "alenaholligan"]; //use array for multiple usernames
//const users = process.argv.slice[2];
users.forEach(profile.get);
