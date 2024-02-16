const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get for users");
});
router.get("/:id", (req, res) => {
  res.send("get for show users");
});
router.post("/", (req, res) => {
  res.send("get for id users");
});
router.delete("/:id", (req, res) => {
  res.send("Delete for users");
});

module.exports = router;
