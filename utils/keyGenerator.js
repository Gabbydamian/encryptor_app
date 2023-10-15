function generateKey() {
  const length = Math.floor(Math.random() * 5) + 4; // Generate a random length between 4 and 8 characters
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Characters to choose from
  let key = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    key += charset[randomIndex];
  }

  return key;
}


module.exports = {generateKey};
