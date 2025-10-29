// mongo model
import mongoose from 'mongoose'

const SecretSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  ciphertext: { type: String, required: true },
})

export default mongoose.model('Secret', SecretSchema)
