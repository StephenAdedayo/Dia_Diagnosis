import express from 'express'
import predictDiabetes from '../controllers.js/predictControllers.js'

const predictRouter = express.Router()

predictRouter.post("/predict", predictDiabetes)

export default predictRouter

