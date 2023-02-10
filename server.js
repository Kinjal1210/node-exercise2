import express from "express";
import apiRouter from "./routes";
import config from "./config";
import {errorHandler} from "./middlewares/errorHandler.js";
console.log(errorHandler);


const app = express();

app.use(express.json());

app.use("/api", apiRouter);

/**
 * Error handler middleware
 */
app.use(errorHandler);

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, age: err.message });
});

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
app.listen(config.port || 3000, () =>
  console.log(`Server listening on port ${config.port}...`)
);