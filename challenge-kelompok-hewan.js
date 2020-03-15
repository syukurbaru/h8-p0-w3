// function groupAnimals(animals) {
// you can only write your code here!
// var tampung = [];
// var inTamp = 0;
// for (var i = 0; i < animals.length; i++) {
//   animals.sort();
//   if (tampung.length === 0) {
//     tampung.push([animals[i]]);
//   } else if (tampung[inTamp][0][0] === animals[i][0]) {
//     tampung[inTamp].push(animals[i]);
//   } else {
//     tampung.push([animals[i]]);
//     inTamp++;
//   }
// }
// return tampung;
// }

function groupAnimals(animals) {
  var sortedAnimals = [];
  var huruf = [];
  for (var i = 0; i < animals.length; i++) {
    for (var j = 0; j <= huruf.length; j++) {
      // console.log(huruf[j]);
      if (animals[i][0] == huruf[j]) {
        sortedAnimals[j].push(animals[i]);
        // console.log(animals[i][0]);
        // console.log(sortedAnimals[j]);
        break;
      } else if (j == huruf.length) {
        sortedAnimals.push([animals[i]]);
        huruf.push(animals[i][0]);
        break;
      }
    }
  }
  // console.log(sortedAnimals); Disini belum sort
  // Sort animals using bubble sort
  for (var h = 0; h < sortedAnimals.length; h++) {
    for (var k = 0; k < sortedAnimals.length - h - 1; k++) {
      let buffer = [];
      if (sortedAnimals[k][0] > sortedAnimals[k + 1][0]) {
        buffer = sortedAnimals[k + 1];
        sortedAnimals[k + 1] = sortedAnimals[k];
        sortedAnimals[k] = buffer;
      }
    }
  }
  return sortedAnimals;
}
// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [["ayam", "anoa"], ["cacing", "cicak"], ["kuda", "kancil"], ["unta"]];
