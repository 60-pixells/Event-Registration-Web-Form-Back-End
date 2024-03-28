import mongoose, { Schema } from "mongoose";

const userRegistrationSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true
    },
    eventSelected: {
        type: String,
        require: true
    }
});


const UserRegistration = mongoose.model("UserRegistration", userRegistrationSchema, "UserRegistration");

export default UserRegistration;