import mongoose from "mongoose"


const init = async () => {
    try {
        await mongoose.connect('monogo://user-mongo-srv:27017');
        console.log('[USER-SERVICE]: Database established...');
    } catch (err) {
        console.log('[USER-SERVICE]: Database connection failed');
        process.exit(1);
    };
};

export default init;