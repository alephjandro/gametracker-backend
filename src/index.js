require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

console.log('uri cargada') 
process.env.MONGODB_URI

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => 
res.json({ message: '¡Bienvenido a GAMETRACKER API!' }))

const PORT = process.env.PORT || 4000
const URI = process.env.MONGODB_URI


mongoose.connect(URI)
.then(() => {
    console.log("Conectado a la base de datos MongoDB")
app.listen(PORT, () => 
console.log(`El servidor funciona en http://localhost:${PORT}`))
})
.catch((error) => console.error('Error al conectar a la base de datos MongoDB:', error))
