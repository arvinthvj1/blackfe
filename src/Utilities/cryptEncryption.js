import CryptoJS from 'crypto-js';

const encryptText = (text, secretKey) => {
  const encryptedText = CryptoJS.AES.encrypt(text, secretKey).toString();
  return encryptedText;
};

const decryptText = (encryptedText, secretKey) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
  const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedText;
};

export {encryptText,decryptText}