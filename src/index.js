const input1 = document.getElementById("plainText");
const encBtn = document.getElementById("encBtn");
const encKey = document.getElementById("encKey");
const output = document.getElementById("output");
const switchBtn = document.getElementById("switchAction");
const copyBtn = document.getElementById("copyBtn");
const IV = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
let encKeyVal;
let isEnc = true;

switchBtn.addEventListener("click", () => {
  isEnc = !isEnc;
  if (isEnc) {
    switchBtn.innerText = "Have a cipher? Decrypt here!";
    input1.value = "";
    encKey.value = "";
    encBtn.innerText = "Encrypt";
    output.innerHTML = "";
    input1.placeholder = "Enter text to encrypt here";
  } else {
    switchBtn.innerText = "Switch to Encryption";
    input1.value = "";
    encKey.value = "";
    output.innerHTML = "";
    encBtn.innerText = "Decrypt";
    input1.placeholder = "Enter text to decrypt here";
  }
});

function encrypt(text, key, iv) {
  const options = { iv: iv };
  try {
    const cipher = CryptoJS.AES.encrypt(text, key, options).toString();
    return cipher;
  } catch (error) {
    Toastify({
      text: "Something went wrong while encrypting:(",
      duration: 2000,
      position: "center",
    }).showToast();
  }
}

function decrypt(text, key, iv) {
  const options = { iv: iv };
  try {
    const decipher = CryptoJS.AES.decrypt(text, key, options).toString(
      CryptoJS.enc.Utf8
    );
    return decipher;
  } catch (error) {
    Toastify({
      text: "Something went wrong during decryption:(",
      duration: 2000,
      position: "center",
    }).showToast();
  }
}

encBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let usrInp = input1.value.trim();
  encKeyVal = encKey.value.trim();
  let result;

  let key = encKeyVal ? encKeyVal : "default_key";

  if (isEnc) {
    if (usrInp === "") {
      // input1.classList.remove('shake')
      Toastify({
        text: "Provide Text to Encrypt",
        duration: 2000,
        position: "center",
      }).showToast();
      result = "";
    } else {
      result = encrypt(usrInp, key, IV);
    }
    console.log(result);
  } else {
    result = decrypt(usrInp, key, IV);
    if (usrInp === "") {
      Toastify({
        text: "Provide Phrase to Decrypt",
        duration: 2000,
        position: "center",
      }).showToast();
    }
    if (result === '' && usrInp !== '') {
      Toastify({
        text: "Incorrect Secret Key",
        duration: 2000,
        position: "center",
      }).showToast();
      result = "";
    }
  }
  output.innerHTML = result;
});

copyBtn.addEventListener("click", () => {
  output.select();
  try {
    document.execCommand("copy");
    Toastify({
      text: "Copied phrase to clipboard",
      duration: 2000,
      position: "center",
    }).showToast();
  } catch (error) {
    Toastify({
      text: error.message,
      duration: 2000,
    }).showToast();
  }
});
