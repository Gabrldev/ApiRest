const bycrypjs = require('bcryptjs')

// necesita la contraseña sin encriptar y el hash
const encrypt = async (textPlain) => {
  const hash = await bycrypjs.hash(textPlain, 10)
  return hash
}

// pasar contraseña sin encriptar y el hash
const compare = async (passwordPlain, hashPassword) => {
  return await bycrypjs.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }
