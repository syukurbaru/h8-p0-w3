//input "hello world!"
var str = "hello world";

function balikString(str) {
  var newStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
//output
console.log(balikString(str));
//"!dlrow olleh";
