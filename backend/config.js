import dotenv from "dotenv";

dotenv.config();

export const mongoDBURL = process.env.MONGO_URL;
export const PORT = process.env.PORT || 5555;