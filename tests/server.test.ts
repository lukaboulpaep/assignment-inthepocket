import request from "supertest";
import { app } from "../src/server";

it("has a compute endpoint that returns the score with status code 200", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10]
      ],
    });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ score: 300 });
});

it("less amount of frames with error message status code 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10]
      ],
    });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({ message: 'A game has to have 10 Frames.' });
});

it("wrong last frame with error message status code 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0]
      ],
    });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({ message: 'The last Frame needs 3 values.' });
});

it("wrong input value with error message status code 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [11, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10]
      ],
    });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({ message: 'Check if your values are between 0 and 10.' });
});