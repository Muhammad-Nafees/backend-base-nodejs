import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["doctor", "patient", "admin"],
        required: true
    },
}, { timestamps: true }
);

export const UserModal = model("User", UserSchema);