// const iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
let ciphertext = document.getElementById('ciphertext').value;
const decKey = document.getElementById('decKey').value;
const encKey = document.getElementById('encKey').value;
const decryptBtn = document.getElementById('decryptBtn');
const encryptBtn = document.getElementById('encryptBtn');
let plaintext = document.getElementById('plaintext').value;


function decrypt(text, key) {
    const options = { iv: CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f') };
    const decipher = CryptoJS.AES.decrypt(text, key, options).toString(CryptoJS.enc.Utf8);
    console.log('Decryption successful, plaintext:', decipher);
    console.log('Decipher length:', decipher.length);
    return decipher;
}

function encrypt(text, key) {
    const options = { iv: CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f') };
    const cipher = CryptoJS.AES.encrypt(text, key, options).toString();
    console.log('Encryption successful, cipher:', cipher);
    return cipher;
}

decryptBtn.addEventListener('click', (e) => {
    e.preventDefault();
    plaintext = decrypt(ciphertext, decKey);
});

encryptBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ciphertext = encrypt(plaintext, encKey);
});

decryptBtn.addEventListener('click', (e) => {
    e.preventDefault();
    plaintext = decrypt(ciphertext, decKey);
});