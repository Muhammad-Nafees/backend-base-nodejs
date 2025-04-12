import express from "express";
import cors from "cors";


const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({ extended: true }));
 // app.use(express.static("public"));

export default app;