import mongoose from 'mongoose';


const init = async () => {
    try {
        if(!process.env.MONGO_URI) throw Error('MONGO URI Missing');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('[Database]: Connection establised...');
    } catch (err) {
        console.log(`[Data base]: connection failed`);
        process.exit(1);
    }
};

export default init;