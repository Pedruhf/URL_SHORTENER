function generateCode() {
  let code = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++) {
    const randomCharacter = Math.floor(Math.random() * possible.length);
    code += possible.charAt(randomCharacter);
  }

  return code;
}

module.exports = { generateCode };