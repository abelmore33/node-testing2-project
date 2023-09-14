/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("teams").truncate();
  await knex("teams").insert([
    { team_name: "Lakers" },
    { team_name: "Bulls" },
    { team_name: "Knicks" },
    { team_name: "Kings" },
    { team_name: "Thunder" },
    { team_name: "Jazz" },
    { team_name: "Pacers" },
    { team_name: "Nets" },
    { team_name: "Suns" },
    { team_name: "Spurs" },
    { team_name: "Mavericks" },
    { team_name: "Rockets" },
    { team_name: "76ers" },
    { team_name: "Heat" },
    { team_name: "Raptors" },
    { team_name: "Timberwolves" },
    { team_name: "Clippers" },
    { team_name: "Nuggets" },
    { team_name: "Hornets" },
    { team_name: "Cavaliers" },
    { team_name: "Bucks" },
    { team_name: "Grizzlies" },
    { team_name: "Hawks" },
    { team_name: "Pelicans" },
    { team_name: "Magic" },
    { team_name: "Trail Blazers" },
    { team_name: "Warriors" },
    { team_name: "Wizards" },
    { team_name: "Pistons" },
    { team_name: "Celtics" },
  ]);
  await knex("players").truncate();
  await knex("players").insert([
    {
      player_first_name: "LeBron",
      player_last_name: "James",
      player_jersey_number: 23,
      team_id: 1,
    },
    {
      player_first_name: "Damian",
      player_last_name: "Lillard",
      player_jersey_number: 0,
      team_id: 1,
    },
    {
      player_first_name: "Kyrie",
      player_last_name: "Irving",
      player_jersey_number: 2,
      team_id: 26,
    },
  ]);
};
