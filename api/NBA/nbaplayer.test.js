// const Nba = require("./nba-model");
// const db = require("../../data/db-config");

// beforeAll(async () => {
//   await db.migrate.rollback();
//   await db.migrate.latest();
// });

// beforeEach(async () => {
//   await db.seed.run();
// });

// test("environment is testing", () => {
//   expect(process.env.Node_ENV).toBe("testing");
// });

// describe("get", () => {
//   test("resolves all players in list", async () => {
//     const result = await Nba.get();
//     expect(result).toHaveLength(3);
//     expect(result[0]).toMatchObject({ player_first_name: "LeBron" });
//     expect(result[1]).toMatchObject({ player_first_name: "Damian" });
//     expect(result[2]).toMatchObject({ player_first_name: "Kyrie" });
//   });
// });

// describe("getPlayerById", () => {
//   test("resolves to a single player in list", async () => {
//     const result = await Nba.getById(1);
//     expect(result).toHaveLength(1);
//   });
// });
