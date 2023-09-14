const server = require("./server");
const request = require("supertest");
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

describe("[GET] /playerlist", () => {
  test(`responds with 200 ok`, async () => {
    const res = await request(server).get("/playerlist");
    expect(res.body).toHaveLength(3);
  });
});
