import { Game } from "./types";

export function compute(game: Game): number {
  let score: number = 0;

  for (let index: number = 0; index < game.length; index++ ) {
    let frameScore: number = game[index][0] + game[index][1];

    // Calculate score when it is a strike
    if(game[index][0] == 10) {
      // Eliminate special cases
      if (index == 8) {
        frameScore = game[index + 1][0] + game[index + 1][1];
        score += (10 + frameScore)
        continue;
      }

      if (index == 9) {
        score += (game[index][0] + game[index][1] + game[index][2])
        continue;
      }
      
      // Calculate score if it is a normal frame after the strike
      if (game[index + 1][0] != 10) {
        frameScore = game[index + 1][0] + game[index + 1][1];
        score += (10 + frameScore)
        continue;
      }

      // Check first if the next one isn't also a strike if so score is 30
      if(game[index + 2][0] == 10) {
        score += 30;
        continue;
      }
      frameScore = game[index + 2][0];
      score += (20 + frameScore)
      continue;
    }

    //Calculate score when it is a spare
    if(frameScore == 10) {
      // Eliminate special cases
      if (index == 9) {
        score += frameScore + game[index][2]
        continue;
      }
      score += (10 + game[index + 1][0])
      continue;
    }

    //Calculate score when it is a regulare Frame
    score += frameScore;
  }

  return score;
}
