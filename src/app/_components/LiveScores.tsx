import React from "react";

export type Score = {
  team1: string;
  score1: number;
  score2: number;
  team2: string;
  state: "live" | "half-time" | "over";
  time?: number;
};

type LiveScoresProps = {
  competition: string;
  scores: Score[];
};

const LiveScores: React.FC<LiveScoresProps> = ({ competition, scores }) => {
  return (
    <section className="rounded-lg bg-white p-6 shadow-lg">
      <div className="flex justify-between text-red-500">
        <h3 className="header-2">
          Scores en direct
        </h3>
        <kbd className="btn btn-ghost kbd uppercase">Voir Plus &gt;</kbd>
      </div>
      <h3 className="mb-4 bg-blue-900 p-4 text-3xl font-semibold uppercase text-white">
        {competition}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {scores.map((match, index) => (
          <div key={index} className="grid rounded-lg border p-4">
            <div>{match.state}</div>
            <div className="flex justify-between font-bold">
              <div>{match.team1}</div>
              <div>{match.score1}</div>
            </div>
            <div className="divider divider-end text-green-500">
              {match.time}&apos;
            </div>
            <div className="flex justify-between font-bold">
              <div>{match.team2}</div>
              <div>{match.score2}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveScores;
