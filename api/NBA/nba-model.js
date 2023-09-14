const db = require("../../data/db-config");

module.exports = {
  get,
  getById,
  insert,
  update,
  //   remove,
};

function get() {
  return db("players");
}

function getById(id) {
  return db("players").where("player_id", id).first();
}

async function insert(player) {
  const [id] = await db("players").insert(player);
  return getById(id);
}

async function update(id, changes) {
  return db("players").where("player_id", id).update(changes);
}
