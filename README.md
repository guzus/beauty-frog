# beauty-frog
NPM module that supports beautiful console-logging experience for Node JS

## installation
`npm i beauty-frog --save`

## how to use

**Code**
```javascript
const { horizontalView } = require("beauty-frog");

console.log(
  horizontalView(
    elements = [
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
    `
    ],
    // width = 30,
    // padding = 10
  )
);
```

**Console**
```
                                                                                
    hi this is beauty-frog.                 this is mind-blowing.               
    How do you like this package?           I gotta tell my mom about this.     
    :)                                      I'm loving it.                      
                                            🔥                                  
                                                                                
```