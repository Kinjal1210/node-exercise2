import dotenv from "dotenv";


// ensures that env variables are loaded
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

// exports env variables for use
export default {
  mysql: {
  host: process.env.DB_HOST=localhost,
  user: process.env.DB_USER=root,
  password: process.env.DB_PASS=password,
   detabase: process.env.DB_SCHEMA=bestbuy,
  port: parseInt(process.env.PORT),
}};
