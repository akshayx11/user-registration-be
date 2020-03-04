import Joi from "@hapi/joi";

export const createAndUpdateUserValidator = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    title: Joi.string(),
    firstName: Joi.string().required(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    gender: Joi.string(),
    dateOfBirth: Joi.string(),
    mobileNumber: Joi.number(),
    email: Joi.string().email().required(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string()
});