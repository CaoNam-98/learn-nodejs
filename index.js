import express from 'express'
import cors from 'cors'
require('dotenv').config()

import initRoutes from "./src/routes"
require('./connection_database')

// Tạo con app
const app = express()
// Config con app => bỏ vào middleware cho con app
// cors có chứa origin là url mà cho vào server để lấy data
// quản lý method chỉ cho phép các method được định nghĩa trong methods => ở đây cho phép GET, POST, PUT, DELETE
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// express.json giúp con app có thể đọc được data từ client gửi lên => convert sang chuỗi json bằng json()
app.use(express.json())
// nếu ông client gửi lên một mảng hoặc object thì dùng .urlencoded => convert array, object sang chuỗi json
app.use(express.urlencoded({ extended: true }))

// Define route thì trả về 1 callback
// req là những cái gì mà client gửi lên thì ở trong req
// res là từ express tạo ra và dùng để trả data cho client lấy về
initRoutes(app)

// dùng || 8888 để lỡ trong file env không khai báo PORT thì mặc định dùng port 8888
// Setting port
const PORT = process.env.PORT || 8888

// Lệnh cho sever chạy
const listener = app.listen(PORT, () => {
    // listener.address() => lấu được url đang chạy
    // listener.address().port lấy ra được port mà sever đang chạy
    console.log('Server is running on the port' + listener.address().port)
})