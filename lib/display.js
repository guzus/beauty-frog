const horizontalView = (elements, width = maxWidth(elements), padding = 5) => {
  let view = "";
  let lines = [];

  elements.forEach((element) => {
    lines.push(element.split("\n"));
  });

  const lineCount = Math.max.apply(
    null,
    lines.map((line) => line.length)
  );

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
  return Math.max.apply(
    null,
    elements.map((element) =>
      Math.max.apply(
        null,
        element.split("\n").map((line) => line.length)
      )
    )
  );
};
module.exports = { horizontalView };
