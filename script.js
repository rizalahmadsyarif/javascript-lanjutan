// object literal
// let mahasiswa1 = {
//     nama: 'galih',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
        
//     }
// }
// let mahasiswa2 = {
//     nama: 'sandika',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
        
//     }
// }

// function declaration
//  function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function (porsi) {
//         this.energy += porsi;
//         console.log(`halo ${this.nama} selamat makan`);    
//     }

//     mahasiswa.main = function(jam) {
//         this.energy -= jam;
//         console.log(`halo ${this.nama} selamat bermain`);
        
//     }
//     return mahasiswa;
//  }

//  let dika = Mahasiswa('dika', 10);
//  let rika = Mahasiswa('rika', 10);



// constructor function
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
//     this.makan = function (porsi) {
//         this.energy += porsi;
//         console.log(`halo ${this.nama} selamat makan`);    
//     }

//     this.main = function(jam) {
//         this.energy -= jam;
//         console.log(`halo ${this.nama} selamat bermain`);    
//     }
//  }

//  let dika = new Mahasiswa('dika', 10);




// object .create
// const methodMahasiswa  = {
//     makan : function (porsi) {
//         this.energy += porsi;
//         console.log(`halo ${this.nama} selamat makan`);    
//     },
//     main : function (jam) {
//         this.energy -= jam;
//         console.log(`halo ${this.nama} selamat bermain`);
//     }, 
//     tidur: function (jam) {
//         this.energy += jam * 2;
//         console.log(`halo ${this.nama} selamat tidur`); 
//     }
// }
//  function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
    
//     return mahasiswa;
//  }

//  let dika = Mahasiswa('dika', 10);
//  let rika = Mahasiswa('rika', 10);

// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
//  }
//  Mahasiswa.prototype.makan = function (porsi) {
//     this.energy += porsi;
//     return `halo ${this.nama}, selamat makan`;
//  }
//  Mahasiswa.prototype.main = function (jam) {
//     this.energy -= jam;
//     return `halo ${this.nama}, selamat main`;
//  }
//  Mahasiswa.prototype.tidur = function (jam) {
//     this.energy += jam * 2;
//     return `halo ${this.nama}, selamat tidur`;
//  }

//  let dika = new Mahasiswa('dika', 10);

// versi class
// class Mahasiswa {
//     constructor(nama, energy) {
//         this.nama = nama;
//         this.energy = energy;
//     }
//     makan (porsi) {
//         this.energy += porsi;
//         return `halo ${this.nama}, selamat makan`;
//     }
//     main (jam) {
//         this.energy -= jam;
//         return `halo ${this.nama}, selamat main`;
//     }
//     tidur (jam) {
//     this.energy += jam * 2;
//     return `halo ${this.nama}, selamat tidur`;
//     }
// }

// let dika = new Mahasiswa ('dika', 40);

let angka = [1,2,3];
console.log(angka.reverse());

