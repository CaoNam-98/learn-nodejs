import jwt from 'jsonwebtoken'
import { notAuth } from './handle_errors'

// Do nó nằm giữa route và controller nên sẽ có req, res, next
const verifyToken = (req, res, next) => {
    // User thường gắn token vào header nên ta phải lấy token từ header
    const token = req.headers.authorization
    if (!token) return notAuth('Require authorization', res)
    // Tách token và Bear
    const accessToken = token.split(' ')[1]
    // verify access_token
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
        // user (decode) là nếu verify pass được accessToken, process.env.JWT_SECRET và pass được err => convert token sang object mà mình mã hoá lúc đăng ký
        // Nếu verify bị lỗi
        if (err) return notAuth('Access token may be expired or invalid', res)
        // user chứa 3 field được mã hoá: id, email, role_code bằng cách thêm field user
        req.user = user
        // next() để chạy qua controller
        next()
    })
}

export default verifyToken