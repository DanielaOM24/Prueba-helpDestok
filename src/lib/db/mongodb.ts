import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Falta la variable de entorno MONGODB_URI");
}

const mongoUri: string = MONGODB_URI;


async function DBConnection() {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    if (mongoose.connection.readyState === 2) {
        return mongoose.connection.asPromise();
    }

    return mongoose.connect(mongoUri, {
        dbName: process.env.MONGODB_DB || undefined,
    });
}

export { DBConnection };

