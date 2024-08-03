import * as services from "../services";
import { internalServerError, badRequest } from "../middlewares/handle_errors";

export const getBooks = async (req, res) => {
  try {
    // Truyền param qua url thì req.query
    // Truyền param qua body thì req.body
    const response = await services.getBooks(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
