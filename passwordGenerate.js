const generatePassword = (length = 16) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  // 安全な乱数を生成
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);


  return Array.from(randomValues)
    .map((x) => charset[x % charset.length])
    .join('');
};


console.log(generatePassword(20)); // 20桁のパスワードを表示