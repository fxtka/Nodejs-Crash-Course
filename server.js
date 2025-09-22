import http from 'http';
import fs from 'fs/promises'
const PORT = process.env.PORT
import url from 'url'
import path from 'path'
import { error } from 'console';

//get current path
const __filename =url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


console.log(`filename ${__filename}, \n dirName ${__dirname}`);



const server = http.createServer(async (req, res) =>{
    // res.write('HelloWorld')
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode =404


    // console.log(req.url)
    // console.log(req.method);
    try {
        //check get request
        // console.log(`req method ---> ${req.method}`);
        
        if (req.method === 'GET'){
            let filePath;

            if(req.url==='/'){
                // res.writeHead(200, {'content-type': 'text/html'})
                // res.end('<h1>HOMPAGE</h1>')
                filePath = path.join(__dirname, 'public', 'index.html')



            } else if(req.url === '/about'){
                // res.writeHead(200,{'content-type': 'application/json'})
                // res.end(JSON.stringify({message: 'This is about'}))


                filePath = path.join(__dirname, 'public', 'about.html')


            }else {
                // res.writeHead(404,{'content-type': 'application/json'})
                // res.end(JSON.stringify({message: 'this is the 404'}))
                throw new error('not found')

            }
            
            const data = await fs.readFile(filePath)
            res.setHeader('content-type', 'text/html')
            res.write(data)
            res.end()


                
        }else {
            throw new Error("Method Not allowed");
            
        }
    } catch (error) {
        res.writeHead(500,{"content-type": 'text/plain'})
        res.end('Server error')
    }
  
    
})


server.listen( PORT ,()=>{
    console.log(`Server running on port:${PORT} `)
}) 