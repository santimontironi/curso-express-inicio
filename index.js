const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.text())
app.use(express.json())

app.post('/user',(req,res) => {
    console.log(req.body)
    res.send("enviando un usuario")
})

app.get('/persons/:person',(req,res) => {
    console.log(req.params.person)
    res.send(`Hola ${req.params.person}`)
})

app.get('/numbers/:x/:y',(req,res) => {
    const num1 = parseInt(req.params.x)
    const num2 = parseInt(req.params.y)

    const suma = num1 + num2

    console.log(suma)

    console.log(req.query.pepe)

    res.send(`El resultado de la suma es ${suma}`)
})

//middleWare
app.use((req,res,next) => {
    console.log("pasa por acá")
    next()
})

app.use((req,res,next) => {
    if(req.query.name == "santiago"){
        next()
    }
    else(
        res.send("No autorizado")
    )
})

//middleWare con morgan
app.use(morgan('dev'))

app.get('/dashboard',(req,res) => {
    res.send("Dashboard")
})

app.get('/profile',(req,res) => {
    res.send("Profile")
})

app.listen(3000)

console.log("Corriendo en el puerto 3000")
