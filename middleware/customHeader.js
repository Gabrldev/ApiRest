const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key
    if (apiKey === 'neway') {
      next()
    } else {
      res.status(403)
      res.send({ error: 'Api key is not valid' })
    }
  } catch (error) {
    res.status(403)
    res.send({ error: 'Forbidden' })
  }
}

module.exports = customHeader
