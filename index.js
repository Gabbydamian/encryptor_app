const CryptoJS = require('crypto-js');
const fs = require('fs');
const { generateKey } = require('./utils/keyGenerator');
const encryption_type = ['AES', 'des', 'tripledes', 'rc4', 'rabbit', 'rc2'];

const key = generateKey();

function encrypt(text, key, type, iv) {
  const options = { iv: iv };
  const cipher = CryptoJS[type].encrypt(text, key).toString();
  return cipher;
}

function decrypt(text, key, type, iv) {
  const options = { iv: iv };
  const decipher = CryptoJS[type]
    .decrypt(text, key)
    .toString(CryptoJS.enc.Utf8);
  return decipher;
}

const iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

let txt = encrypt('Hello World', key, encryption_type[0], iv);
console.log(txt);
let txt2 = decrypt(txt, key, encryption_type[0], iv);
console.log(txt2);

console.log(iv.toString());
