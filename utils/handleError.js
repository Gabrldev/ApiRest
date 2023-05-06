const handleHttpError = async (res, message = 'Algo salió mal', code = 403) => {
try {
  res.setHeader('Authorization', 'auth')
  res.status(code)
  res.send({ error: message })
} catch (error) {
  console.log(error);
}
}

module.exports = { handleHttpError }
