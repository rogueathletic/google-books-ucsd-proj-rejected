const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");// <-- takes us to ./api/index.js
router.use("/api", apiRoutes); // <-- same as google.com/api
router.use("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
