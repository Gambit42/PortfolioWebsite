const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const visitorURL = require("./routes/visitor");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(cors());
app.use("/", visitorURL);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
