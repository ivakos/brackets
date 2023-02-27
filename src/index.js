module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let openBrackets = [];
  let closeBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol) && closeBrackets.includes(currentSymbol)) {
      counter++;
    }

    if ((openBrackets.includes(currentSymbol) && !closeBrackets.includes(currentSymbol)) || (openBrackets.includes(currentSymbol) && counter == 1)) {
      stack.push(currentSymbol);
    } else {

      let topElement = stack[stack.length - 1];
      let indexOpenBrackets = openBrackets.indexOf(topElement);
      let indexCloseBrackets = closeBrackets.indexOf(currentSymbol);

      if (openBrackets.includes(currentSymbol) && closeBrackets.includes(currentSymbol)) {
        counter = 0;
      }

      if (indexOpenBrackets === indexCloseBrackets) {
        stack.pop();
      }
      else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
