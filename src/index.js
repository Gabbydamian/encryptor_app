const fileDropArea = document.getElementById('fileDrop');

fileDropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileDropArea.classList.add(
    'border-solid',
    'border-blue-600',
    'bg-gray-200'
  );
});

fileDropArea.addEventListener('dragleave', () => {
  fileDropArea.classList.remove(
    'border-solid',
    'border-blue-600',
    'bg-gray-200'
  );
});

fileDropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  fileDropArea.classList.remove(
    'border-solid',
    'border-blue-600',
    'bg-gray-200'
  );
});



function encrypt(text, key, type, iv) {
  const options = { iv: iv };
  try {
    const cipher = CryptoJS[type].encrypt(text, key, options).toString();
    return cipher;
  } catch (error) {
    console.log('Encryption failed:', error.message);
  }
}


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

const encryption_type = ['AES', 'DES', 'RD4', 'RC2'];
const key = 'apple';
const IV = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

let txt = encrypt('Damian Gabriel', key, encryption_type[0], IV);
let txt2 = decrypt(
  'U2FsdGVkX1/eN1yocal7hGd8nlO9u9HQ++m8QDnUG5Y=',
  key,
  encryption_type[0],
  IV
);

console.log(txt);
console.log(txt2);