function pasanganTerbesar(num) {
  var numStr = String(num);

  var tampung = "";
  var angka1 = 0;
  var angka2 = 0;

  for (var i = 0; i < numStr.length; i++) {
    tampung = numStr[i] + numStr[i + 1];
    angka1 = Number(tampung);
    if (angka1 > angka2) {
      angka2 = angka1;
    }
  }
  return angka2;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
