import express, { Express } from "express";
import { PORT } from "./constants";
import router from "./routes";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import authMiddleware from "./middlewares/authMiddleware";
import cors from "cors";

const app: Express = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

app.use(authMiddleware);
app.use(router);
app.use(errorHandlerMiddleware);
