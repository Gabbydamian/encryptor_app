const CryptoJS = require('crypto-js')
const key = 'apple';
const IV = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

function decrypt(text, key, iv) {
  const options = { iv: iv };
  try {
    const decipher = CryptoJS.AES
      .decrypt(text, key, options)
      .toString(CryptoJS.enc.Utf8);
    return decipher;
  } catch (error) {
    console.log('Decryption failed:', error.message);
  }
}

let txt2 = decrypt(
  'U2FsdGVkX199wqSpF5I9MMq9/neZbJSW93SyjvVUGoA=',
  key,
  IV
);

console.log('txt2:', txt2);
