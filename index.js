require ('dotenv').config()
const http =  require ("http")

function requestController(){
    console.log("Hola Mundo!!!")
}

// configurar servidor
const server = http.createServer(requestController)
const PORT = process.env.PORT || 3000
server.listen(PORT, function(){
    console.log(`App running on PORT ${PORT}`)
})