const Horizontal = (elements, blankCount) => {
  let result = "";
  let lines = [];

  elements.forEach((element) => {
    lines.push(element.split("\n"));
  });

  const lineCount = max(lines.map((line) => line.length()));

  for (let i = 0; i < lineCount; i++) {
    for (const line of lines) {
      result += line[i] + " " * blankCount;
    }
    result += "\n";
  }

  console.log(result);
};
