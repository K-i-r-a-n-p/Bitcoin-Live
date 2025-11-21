import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import {handlePrice} from './handlers/routeHandlers.js'

const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer(async (req,res) =>{
    if(req.url==="/price"){
        handlePrice(req,res)
    }else{
    return await serveStatic(req,res,__dirname)}

})

server.listen(PORT,()=> console.log(`Server connected on port: ${PORT}`))

