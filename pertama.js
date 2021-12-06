const y = 10;

console.log('Punya sebuah melati');
console.log('banyaknya melati adalah');
console.log(y);

function klik() {
  var nama = prompt('Masukan nama ');
  //   var panggil = document.getElementById('hasil').innerHTML;
  if (nama != null) {
    document.getElementById('hasil').innerHTML = nama;
  } else {
    alert('Jangan Kosong');
  }
}

// const btn1 = document.getElementById('btn');
// btn1.klik();
