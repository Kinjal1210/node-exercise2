import dotenv from "dotenv";

// ensures that env variables are loaded
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

// exports env variables for use
export default {
  
  port: parseInt(process.env.PORT),
};
