const horizontalView = (elements, width = maxWidth(elements), padding = 5) => {
  let view = "";

  const lines = elements.map((element) => element.split("\n"));

  const lineCount = lines.map((line) => line.length).reduce(maxReducer);

  for (let i = 0; i < lineCount; i++) {
    lines.forEach((line) => {
      view +=
        ((line[i] || "") + " ".repeat(width)).slice(0, width) +
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

module.exports = { horizontalView };
