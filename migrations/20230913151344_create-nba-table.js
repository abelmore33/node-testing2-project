/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema

    .createTable("teams", (tbl) => {
      tbl.increments("team_id");
      tbl.string("team_name").unique();
    })
    .createTable("players", (tbl) => {
      tbl.increments("player_id");
      tbl.text("player_first_name", 128).notNullable();
      tbl.text("player_last_name", 128).notNullable();

      tbl.integer("player_jersey_number", 3).notNullable();
      tbl
        .integer("team_id")
        .unsigned()
        .references("team_id")
        .inTable("teams")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("players").dropTableIfExists("teams");
};
