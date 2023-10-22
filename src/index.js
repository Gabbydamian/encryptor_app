// const key = "apple";
const IV = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");

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
    const decipher = CryptoJS.AES.decrypt(text, key, options).toString(
      CryptoJS.enc.Utf8
    );
    return decipher;
  } catch (error) {
    console.log("Decryption failed:", error.message);
  }
}

// let txt = encrypt('Damian Gabriel', key, IV);
// let txt2 = decrypt(
//   txt,
//   key,
//   IV
// );

// console.log(txt);
// console.log(txt2);

const input1 = document.getElementById("plainText");
const input2 = document.getElementById("cipText");
const encBtn = document.getElementById("encBtn");
const decBtn = document.getElementById("decBtn");
const encKey = document.getElementById("encKey");
const decKey = document.getElementById("decKey");


let encKeyVal, decKeyVal;

encBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let usrInp = input1.value;
  encKeyVal = encKey.value;
  let cipher = encrypt(usrInp, encKeyVal, IV);
  input2.value = cipher;
  console.log("Cipher:", cipher);
  console.log("EncKey:", encKeyVal);
});

decBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let cip = input2.value;
  decKeyVal = decKey.value;

  let plntxt = decrypt(cip, decKeyVal, IV);
  input1.value = plntxt;
  console.log(plntxt);
});
