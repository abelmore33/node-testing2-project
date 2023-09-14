const express = require("express");

const Players = require("./nba-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Players.get()
    .then((players) => {
      res.status(200).json(players);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Players.getById(req.params.id)
    .then((player) => {
      res.status(200).json(player);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Players.insert(req.body)
    .then((player) => {
      res.status(200).json(player);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  Players.update(req.params.id, req.body)
    .then((player) => {
      res.status(200).json(player);
    })
    .catch(next);
});

module.exports = router;
