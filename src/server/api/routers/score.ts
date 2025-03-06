
import { type Score } from "@ln-foot/app/_components/landingSections/LiveScores";
import {
  createTRPCRouter,
  publicProcedure
} from "@ln-foot/server/api/trpc";

export const scoreRouter = createTRPCRouter({
  latest: publicProcedure.query(({}) => {
    const scores: Score[] = [
      {
        team1: "Coton Sport",
        score1: 2,
        score2: 0,
        team2: "Union Sportive",
        state: "live",
        time: 54,
      },
      {
        team1: "Bamboutos",
        score1: 1,
        score2: 1,
        team2: "Dynamo",
        state: "half-time",
        time: 45,
      },
      {
        team1: "Fauve Azur",
        score1: 0,
        score2: 3,
        team2: "AS Fortuna",
        state: "over",
      },
    ];
    return { scores };
  }),
});
