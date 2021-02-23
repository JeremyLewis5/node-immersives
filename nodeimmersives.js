// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const userName1 = getInput(0);
const userName2 = getInput(1);

console.log('Hello, ' +  userName1 + ' ' + userName2 + ', ' + 'welcome to our new app' + "!!!" );

console.log(userName1.toUpperCase(userName1) + ' ' + userName2.toUpperCase(userName2) + ', this is your name in all CAPS!!!');

console.log(userName1[0] + '.' + userName2[userName2.indexOf(' ') + 1] + '.' + ', these are your intials!!!');

console.log(userName1 + '.' + userName2 + '@codeimmersives.com' );
