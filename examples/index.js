const { View } = require("../index");

// View(
//   (elements = [
//     `
//   hi this is beauty-frog.
//   How do you like this package?
//   :)
//   `,
//     `
//   this is mind-blowing.
//   I gotta tell my mom about this.
//   I'm loving it.
//   🔥
//   `,
//   ]),
//   // (width = 30),
//   // (padding = 10)
// )
// .horizonify()
// .log();

new View("hi").log();

new View().set("hi").log();

// TODO:
new View(["hi", "hello"]).log().horizontal().log();