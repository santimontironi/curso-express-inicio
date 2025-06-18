const express = require('express')
const morgan = require('morgan')

const app = express()

//middleware para los archivos public
app.use(express.static('./public'))

app.use(express.text())
app.use(express.json())

//settings
app.set('port',3000)

//middleWare con morgan
app.use(morgan('dev'))

//middleWare
app.use((req,res,next) => {
    console.log("pasa por acá")
    next()
})

app.get('/',(req,res) => {
    res.send("Hello world")
})

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

app.use((req,res,next) => {
    if(req.query.name == "santiago"){
        next()
    }
    else(
        res.send("No autorizado")
    )
})

app.get('/dashboard',(req,res) => {
    res.send("Dashboard")
})

app.get('/profile',(req,res) => {
    res.send("Profile")
})

const port = app.get('port')

app.listen(port)

console.log(`Corriendo en el puerto ${port}`)
