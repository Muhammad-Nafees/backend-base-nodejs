import app from "./app.js";
import dotenv from "dotenv";
import connection_DB from "./config/index.js";
import all_routes from "./routes/index.js"

dotenv.config({ path: ".env" });

connection_DB().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`https://localhost:${process.env.PORT}`);
  });
}).catch((error) => {
  console.log("🚀 ~ connection_DB ~ error:", error)
})

// user routes
app.use("/api", all_routes);

app.get("/home", (req, res) => {
  return res.status(200).json({ message: "Wellcome backend Base Mvc Architecture" });
});