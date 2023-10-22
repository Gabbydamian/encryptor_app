const CryptoJS = require('crypto-js');
const { decrypt, encrypt } = require('./utils');

const encryption_type = ['AES', 'DES', 'RD4', 'RC2'];
const key = 'apple';
const IV = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

let txt = encrypt('Are Gabriel', key, encryption_type[0], IV);
let txt2 = decrypt(
  txt,
  key,
  encryption_type[0],
  IV
);

console.log(txt);
console.log(txt2);
