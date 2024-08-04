import { notAuth } from "./handle_errors";

// Check thằng login có phải là admin không
export const isAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1") return notAuth("Require role admin", res);
  // Khi gọi next() thì req, res, next được bê sang hàm tiếp
  next();
};

// Check thằng login có phải là moderator không
export const isCreatorOrAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1" && role_code !== "R2") return notAuth("Require role Admin or Creator", res);
  // Khi gọi next() thì req, res, next được bê sang hàm tiếp
  next();
};
