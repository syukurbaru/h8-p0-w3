function angkaPalindrome(num) {
  // you can only write your code here!
  var numBaru;
  do {
    numBaru = ""; // buat penampung nilai yang dicari
    num++;
    var numString = num.toString(); // nilai yg ditambahkan diubah jadi string
    // membalikan string dan ditampung ke variabel yg baru
    for (var i = numString.length - 1; i >= 0; i--) {
      numBaru += numString[i];
    }
  } while (num !== +numBaru); // selama angkanya tidak sama dg angka baru (true)
  return numBaru;
}

//TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
