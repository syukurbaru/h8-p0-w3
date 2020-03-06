function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var selisihElement = arr[1] - arr[0];
  var deret;
  // console.log(selisihElement);
  // Cari selisihnya
  for (var i = 1; i < arr.length - 1; i++) {
    // Selisih tiap element
    var selisihHitung = arr[i + 1] - arr[i];
    if (selisihHitung === selisihElement) {
      deret = true;
    } else {
      deret = false;
    }
  }
  return deret;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
