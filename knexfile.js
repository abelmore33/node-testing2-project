// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    seeds: { directory: "./seeds" },
    migrations: {
      directory: "./migrations",
    },
    client: "sqlite3",
    connection: {
      filename: "./nbaPlayers.db3",
    },
    useNullAsDefault: true,
  },

  testing: {
    client: "sqlite3",
    seeds: { directory: "./seeds" },
    migrations: {
      directory: "./migrations",
    },
    connection: {
      filename: "testing.db3",
    },
    useNullAsDefault: true,
  },
};
