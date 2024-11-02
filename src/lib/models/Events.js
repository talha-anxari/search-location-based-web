import mongoose from "mongoose";
const {Schema} = mongoose;

const eventSchema = new Schema({
    title: String,
    description: String,
    startTime: String,
    lastTime: String,
    startDate: String,
    lastDate: String,
    address: String,
    createdBy: {type: mongoose.Types.ObjectId, ref: 'Users'
    },
    going: [{type: mongoose.Types.ObjectId, ref: 'Users'
    }],
    location: {
        lat: Number,
        long: Number,
    }
});

export const EventModal = mongoose.model('Events', eventSchema)