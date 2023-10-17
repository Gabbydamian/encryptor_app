const CryptoJS = require('crypto-js');

function decrypt(text, key, type, iv) {
  const options = { iv: iv };
  try {
    const decipher = CryptoJS[type]
      .decrypt(text, key, options)
      .toString(CryptoJS.enc.Utf8);
    return decipher;
  } catch (error) {
    console.log('Decryption failed:', error.message);
  }
}

module.exports = decrypt;
