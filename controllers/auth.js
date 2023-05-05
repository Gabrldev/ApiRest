const { matchedData } = require('express-validator')
const { usersModel } = require('../models')
const { encrypt } = require('../utils/handlePassword')
const { tokenSign } = require('../utils/handleJwt')
const { handleHttpError } = require('../utils/handleError')
const { compare } = require('../utils/handlePassword')

const registerCtrl = async (req, res) => {
  req = matchedData(req)
  const hashPass = await encrypt(req.password)
  const body = { ...req, password: hashPass }
  const dataUser = await usersModel.create(body)
  dataUser.set('password', undefined, { strict: false })

  const data = {
    user: dataUser,
    token: await tokenSign(dataUser)
  }
  res.send({ data })
}

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req)
    const user = await usersModel.findOne({ email: req.email })
      .select('password name role email')
    if (!user) return handleHttpError(res, 'Usuario no encontrado')

    const hashPass = user.get('password')
    const isMatch = await compare(req.password, hashPass)
    if (!isMatch) return handleHttpError(res, 'Contraseña incorrecta')

    user.set('password', undefined, { strict: false })
    const data = {
      token: await tokenSign(user),
      user

    }
    res.send({ data })
  } catch (error) {
    console.log(error)
    handleHttpError(res)
  }
}
module.exports = {
  registerCtrl,
  loginCtrl
}
