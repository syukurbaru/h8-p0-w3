function targetTerdekat(arr) {
  // you can only write your code here!
  var letakX = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      letakX.push(i);
    }
  }
  // console.log([i]);
  // console.log(letakX);
  // Cari letak O dan ukur
  var letakO = arr.indexOf("o");
  var rentang = [];
  for (var j = 0; j < letakX.length; j++) {
    var selRentang = Math.abs(letakX[j] - letakO);
    rentang.push(selRentang);
  }
  // console.log(letakO);
  // console.log(rentang);
  if (rentang.length === 0) {
    return 0;
  } else {
    var terdekat = rentang[0];
    for (var k = 0; k < rentang.length; k++) {
      if (rentang[k] < terdekat) {
        terdekat = rentang[k];
      }
    }
  }
  return terdekat;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4

console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
