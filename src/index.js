const input1 = document.getElementById("plainText");
const encBtn = document.getElementById("encBtn");
const encKey = document.getElementById("encKey");
const output = document.getElementById("output");
const switchBtn = document.getElementById("switchAction");
const IV = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
let encKeyVal;
let isEnc = true;

switchBtn.addEventListener('click', () => {
  isEnc = !isEnc;
  if (isEnc) {
    switchBtn.innerText = "Have a cipher? Decrypt here!";
    input1.value = '';
    encKey.value = ''
    encBtn.innerText = 'Encrypt'
    output.innerHTML = ''
    input1.placeholder = 'Enter text to encrypt here'
  } else {
    switchBtn.innerText = "Switch to Encryption";
    input1.value = '';
    encKey.value = ''
    output.innerHTML = ''
    encBtn.innerText = 'Decrypt'
    input1.placeholder = 'Enter text to decrypt here'
  }
});

function encrypt(text, key, iv) {
  const options = { iv: iv };
  try {
    const cipher = CryptoJS.AES.encrypt(text, key, options).toString();
    return cipher;
  } catch (error) {
    console.log("Encryption failed:", error.message);
  }
}

function decrypt(text, key, iv) {
  const options = { iv: iv };
  try {
    const decipher = CryptoJS.AES.decrypt(text, key, options).toString(CryptoJS.enc.Utf8);
    return decipher;
  } catch (error) {
    console.log("Decryption failed:", error.message);
  }
}

encBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let usrInp = input1.value;
  encKeyVal = encKey.value;
  
  let result;
  if (isEnc) {
    result = encrypt(usrInp, encKeyVal, IV);
  } else {
    result = decrypt(usrInp, encKeyVal, IV);
  }
  output.innerHTML = result;
});
