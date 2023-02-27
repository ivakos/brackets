module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let openBrackets = [];
  let closeBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];


    if (stack.length === 0) {
      stack.push(currentSymbol);
    } else {

      let topElement = stack[stack.length - 1];

      if (topElement === openBrackets[closeBrackets.indexOf(currentSymbol)] ) {
        stack.pop();
      }
      else {
        stack.push(currentSymbol);
      }
    }
  }
console.log(stack)
  return stack.length === 0;
}
