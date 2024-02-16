const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("get for post users");
});
router.get("/:id", (req, res) => {
  res.send("get for  post show users");
});
router.post("/", (req, res) => {
  res.send("get for post users");
});
router.delete("/:id", (req, res) => {
  res.send("delete post for users");
});

module.exports = router;
