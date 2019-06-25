// load external resources 
const { showHelp } = require("./messaging")
// handle input
const args = process.argv.slice(2);
console.log(args);

if (args.includes("--help")) {
    showHelp()
}
