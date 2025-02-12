import React from "react";

export type Score = {
  team1: string;
  score1: number;
  score2: number;
  team2: string;
};

type LiveScoresProps = {
  competition: string;
  scores: Score[];
};

const LiveScores: React.FC<LiveScoresProps> = ({ competition, scores }) => {
  return (
    <section className="rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-semibold">{competition}</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {scores.map((match, index) => (
          <div key={index} className="rounded-lg border p-4">
            <p className="font-bold">
              {match.team1} {match.score1} - {match.score2} {match.team2}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveScores;
