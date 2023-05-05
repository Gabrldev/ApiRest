const fs = require('fs')
const { matchedData } = require('express-validator')
const { storageModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage/`
// GET /storage
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({})
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_STORAGE_ITEMS')
  }
}
// GET /storage/:id.filename
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await storageModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_STORAGE_ITEM')
  }
}
// POST /storage
const createItem = async (req, res) => {
  try {
    const { file } = req
    const body = {
      url: `${PUBLIC_URL}/${file.filename}`,
      fileName: file.filename
    }
    const response = await storageModel.create(body)
    res.send({ response })
  } catch (e) {
    console.log(e)
    handleHttpError(res, e)
  }
}
// PUT /storage/:id
// DELETE /storage/:id
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const findMedia = await storageModel.findById(id)
    const fileName = findMedia.fileName
    await storageModel.delete({ _id: id })
    fs.unlinkSync(`${MEDIA_PATH}/${fileName}`)
    res.send({ data: 'Delete Success!' })
  } catch (error) {
    console.log(error)
    handleHttpError(res, 'ERROR_DELETE_STORAGE_ITEM')
  }
}

module.exports = {
  getItems,
  getItem,
  createItem,
  deleteItem
}
