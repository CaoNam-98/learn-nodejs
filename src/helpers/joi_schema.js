import joi from 'joi'

// minDomainSegments có ít nhất 2 đấu . và tlds là kết thúc com
export const email = joi.string().pattern(new RegExp('gmail.com$')).required()
export const password = joi.string().min(6).required()