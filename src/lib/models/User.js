// import mongoose from "mongoose";
// const {Schema} = mongoose;

// const userSchema = new Schema({
//     fullName: String,
//     email: String,
//     password: String,
//     profileImg: String,
//     address: String,
//     bio: String,
//     location: {
//         lat: Number,
//         long: Number,
//     }
// });

// export const UserModal = mongoose.model.Users || mongoose.model('Users', userSchema)

import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    profileImg: String,
    address: String,
    bio: String,
    location: {
        lat: Number,
        long: Number,
    }
});

export const UserModal = mongoose.models.Users || mongoose.model('Users', userSchema);
