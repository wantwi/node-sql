const express = require("express");
const cors = require("cors");
const user = require("./routes/authRouter.js");
const people = require("./routes/peopleRouter");
const committee = require("./routes/committeeRouter");
const contribution = require("./routes/contributionRouter");
const operation = require("./routes/operationRouter");

require("env-cmd");

const app = express();

let corsOption = {
  origin: "*",
};

app.use(cors(corsOption));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", user);
app.use("/api", people);
app.use("/api", committee);
app.use("/api", contribution);
app.use("/api",operation)
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "Hello api!!" });
});

const PORT = process.env.DEV_PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server runing on ${PORT} mode`);
});
// app.listen(PORT, () => {
//   console.log(`server running on port: ${PORT}`);
// });

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Server shutting down due to unhandle promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
