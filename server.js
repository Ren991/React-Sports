require("dotenv").config();
const cors = require("cors");
const express = require("express");
require("./config/database");
const passport = require("passport");
const Router = require("./routes/routes");
const goodsRouter = require("./routes/goodsRoutes");
const brandRouter = require("./routes/brandRutes");
const PORT = 4000;
const app = express();

//Midleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/api", Router);
app.use("/api", goodsRouter);
app.use("/api", brandRouter);

app.listen(PORT, () => console.log("Server ready on PORT " + PORT));
