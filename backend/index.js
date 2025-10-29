import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv' // helps in loading the env file
import cors from 'cors'
import Secret from './models/Secret.js'

dotenv.config()
const app = express() // initialize express
app.use(cors()) // cors is a middleware which allows comm. between backend and frontend
app.use(express.json()) 

app.post('/api/secret', async (req, res) => { // path to store secrets
  const { userId, name, ciphertext } = req.body 
  if (!userId || !name || !ciphertext) return res.status(400).json({ msg: 'Missing fields' }) 
  const s = new Secret({ userId, name, ciphertext }) //constructs new mongo document 
  await s.save()
  res.json({ msg: 'Stored securely' })
})

app.get('/api/secret/:userId', async (req, res) => {
  const { userId } = req.params // req.params is an object that maps properties to 'userId'
  const secrets = await Secret.find({ userId }) 
  res.json(secrets)
})

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT || 5000, () => console.log('Server running'))
})


// todo == auth, user isolation, CLI layers so secrets can be added directly through terminal
// core idea == build client side encryption