const handleHttpError = (res, message = 'Algo salió mal', code = 403) => {
  res.status(code)
  res.send({ error: message })
}

module.exports = { handleHttpError }
