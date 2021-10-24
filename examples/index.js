const { horizontalView } = require("../lib");

console.log(
  horizontalView(
    (elements = [
      `
    hi this is beauty-frog.
    How do you like this package?
    :)
    `,
      `
    this is mind-blowing.
    I gotta tell my mom about this.
    I'm loving it.
    🔥
    `,
    ]),
    // (width = 30),
    // (padding = 10)
  )
);
