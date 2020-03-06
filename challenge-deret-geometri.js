function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var jangka = arr[1] / arr[0];
  var isGeometri;
  // cari selisih element untuk membandingkan
  for (var i = 1; i < arr.length - 1; i++) {
    jangkaElement = arr[i + 1] / arr[i];
    if (jangkaElement === jangka) {
      isGeometri = true;
    } else {
      isGeometri = false;
    }
  }
  return isGeometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
