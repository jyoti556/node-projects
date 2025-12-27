import { server } from "typescript"

const http = require('http')

const app = http.createServer((request: any, response: any) => {
    console.log('request', request)
})

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:${8000}`)
})