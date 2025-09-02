import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
    
})

app.post('/', (req, res) =>{
    res.send('Hello World!')
    const recievedData = req.body
    console.log(recievedData);
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
