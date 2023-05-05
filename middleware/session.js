const { handleHttpError } = require('../utils/handleError')
const { tokenVerify } = require('../utils/handleJwt')
const { usersModel } = require('../models')

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, 'NO_TOKEN', 401)
    }
    const token = req.headers.authorization.split(' ').pop()
    const dataToken = await tokenVerify(token)
    if (!dataToken._id) {
      handleHttpError(res, 'INVALID_ID_TOKEN', 401)
    }
    const user = await usersModel.findById(dataToken._id)
    req.user = user
    next()
  } catch (error) {
    handleHttpError(res, 'NOT_SESSION', 401)
  }
}
module.exports = authMiddleware
