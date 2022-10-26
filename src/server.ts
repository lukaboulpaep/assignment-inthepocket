import http from "http";
import express from "express";
import { compute } from "./compute";

export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const game = request.body.game;

  // Check if game has 10 Frames
  if (game.length != 10) {
    return response.status(400).json({
      message: 'A game has to have 10 Frames.'
    });
  }

  // Check if last Frame has 3 values
  if (game[9].length != 3) {
    return response.status(400).json({
      message: 'The last Frame needs 3 values.'
    });
  }

  // Check if each number in game is a value between 0 and 10
  const arrayCheck = range(0, 10)
  for (let index = 0; index < game.length; index++) {
    for(let i = 0; i < game[index].length; i++) {
      if(!arrayCheck.includes(game[index][i])) {
        return response.status(400).json({
          message: 'Check if your values are between 0 and 10.'
        });
      }
    }
  }

  const score = compute(game);
  return response.status(200).json({
    score: score
  });
});

// Make range function to quickly generate an array with ordening numbers
function range(start: number, end: number) {
  let array: number[] = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array
}