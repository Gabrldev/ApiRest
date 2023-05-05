const { handleHttpError } = require('../utils/handleError')

const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req
    console.log(user)
    const rolesByUser = user.role
    const checkValueRol = roles.some((rol) => rolesByUser.includes(rol))
    if (!checkValueRol) {
      handleHttpError(res, 'USER_NO_PERMISSION', 403)
    }
    next()
  } catch (error) {
    handleHttpError(res, 'ERROR_PERMISSION', 403)
  }
}

module.exports = checkRol
