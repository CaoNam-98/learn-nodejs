import joi from "joi";

// minDomainSegments có ít nhất 2 đấu . và tlds là kết thúc com
export const email = joi.string().pattern(new RegExp("gmail.com$")).required();
export const password = joi.string().min(6).required();
export const title = joi.string().required();
export const price = joi.number().required();
export const available = joi.number().required();
export const category_code = joi.string().alphanum().required();
export const image = joi.string().required();
export const bid = joi.string().required();
export const bids = joi.array().required();
export const name = joi.string();
export const filename = joi.array().required();
