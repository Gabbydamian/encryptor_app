const CryptoJS = require('crypto-js');
function encrypt(text, key, type, iv) {
  const options = { iv: iv };
  try {
    const cipher = CryptoJS[type].encrypt(text, key, options).toString();
    return cipher;
  } catch (error) {
    console.log('Encryption failed:', error.message);
  }
}

module.exports = encrypt;
