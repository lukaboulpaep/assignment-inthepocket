import { compute } from "../src/compute";
import { Game } from "../src/types";

it("should return 300 on a perfect game", () => {
  const input300: Game = [
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 10, 10],
  ];

  const score = compute(input300);

  expect(score).toBe(300);
});

it("should return 187 on this game", () => {
  const input187: Game = [
    [10, 0],
    [9, 1],
    [5, 5],
    [7, 2],
    [10, 0],
    [10, 0],
    [10, 0],
    [9, 0],
    [8, 2],
    [9, 1, 10],
  ];

  const score = compute(input187);

  expect(score).toBe(187);
});

it("should return 168 on this game", () => {
  const input168: Game = [
    [10, 0],
    [7, 3],
    [7, 2],
    [9, 1],
    [10, 0],
    [10, 0],
    [10, 0],
    [2, 3],
    [6, 4],
    [7, 3, 3],
  ];

  const score = compute(input168);

  expect(score).toBe(168);
});

it("should return 84 on this game", () => {
  const input84: Game = [
    [10, 0],
    [0, 10],
    [1, 3],
    [1, 8],
    [2, 6],
    [2, 5],
    [3, 2],
    [2, 4],
    [8, 2],
    [1, 2, 0],
  ];

  const score = compute(input84);

  expect(score).toBe(84);
});