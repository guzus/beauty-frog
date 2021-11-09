// New Feature : Logging with .log()
function View(object) {
  this.object = object;
};

View.prototype.set = function(object) {
  return new View(object);
};

View.prototype.log = function() {
  console.log(this.object);
  return this;
};

View.prototype.horizontal = function() {
  if(!(this.object instanceof Array)) {
    console.log("should be array");
  }
  return new View(horizontalView(this.object));
};

const horizontalView = (elements, width = maxWidth(elements), padding = 5) => {

  const lines = elements.map((element) => element.split("\n"));

  const lineCount = lines.map((line) => line.length).reduce(maxReducer);

  //  TODO: refactoring
  let view = "";
  for (let i = 0; i < lineCount; i++) {
    lines.forEach((line) => {
      view +=
        ((line[i] || "") + " ".repeat(width))
        .slice(0, width) +
        " ".repeat(padding);
    });
    view += "\n";
  }

  return view;
};

const maxWidth = (elements) => {
  return elements
    .map((element) =>
      element
        .split("\n")
        .map((line) => line.length)
        .reduce(maxReducer)
    )
    .reduce(maxReducer);
};

const maxReducer = (a, b) => Math.max(a, b);

module.exports = { horizontalView, View };
