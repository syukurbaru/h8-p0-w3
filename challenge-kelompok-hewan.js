function groupAnimals(animals) {
  // you can only write your code here!
  var tampung = [];
  var inTamp = 0;

  for (var i = 0; i < animals.length; i++) {
    animals.sort();
    if (tampung.length === 0) {
      tampung.push([animals[i]]);
    } else if (tampung[inTamp][0][0] === animals[i][0]) {
      tampung[inTamp].push(animals[i]);
    } else {
      tampung.push([animals[i]]);
      inTamp++;
    }
  }
  return tampung;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [["ayam", "anoa"], ["cacing", "cicak"], ["kuda", "kancil"], ["unta"]];
