import mongoose from "mongoose";


const shrinkurlSchema = new mongoose.Schema({
    shrinkUrlId: {
        type: String,
        required: true,
        unique: true,
    },
    actualUrl: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
}, {timestamps: true});

const shrinkurlModel = mongoose.model('shrinkurl', shrinkurlSchema);

export default shrinkurlModel;