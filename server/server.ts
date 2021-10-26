import http from "http";
import { Server } from "socket.io";

const server = http.createServer()

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on('connection', (socket) => {
    console.log('new connection', socket.id)
})

server.listen(5000, () => {
    console.log('server is listening')
})