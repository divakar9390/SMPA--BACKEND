const {z} = require("zod");


const loginSchema = z.object({

    username:z.string({required_error:"name is required"}).trim().min(5).max(),
    email:z.string({required_error:"email is required"}).trim().min(5),
    phn_no:z.number({required_error:"number  is required"}).min(10),
    pass:z.string({required_error:"password is required"}).min(8)
}) ;







module.exports = loginSchema;