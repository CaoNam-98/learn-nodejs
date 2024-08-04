import jwt, { TokenExpiredError } from "jsonwebtoken";
import { notAuth } from "./handle_errors";

// Do nó nằm giữa route và controller nên sẽ có req, res, next
const verifyToken = (req, res, next) => {
  // User thường gắn token vào header nên ta phải lấy token từ header
  const token = req.headers.authorization;
  if (!token) return notAuth("Require authorization", res);
  // Tách token và Bear
  const accessToken = token.split(" ")[1];
  // verify access_token
  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      const isChecked = err instanceof TokenExpiredError;
      if (!isChecked) return notAuth("Access token invalid", res, isChecked);
      if (isChecked) return notAuth("Access token expired", res, isChecked);
    }

    req.user = user;
    // next() để chạy qua controller
    next();
  });
};

export default verifyToken;
