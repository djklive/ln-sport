import React from "react";
import { SectionTitle } from "../common/section-title";

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

const LiveScore: React.FC<{ match: Score }> = ({ match }) => {
  return (
    <div
      className={`grid ${match.state !== "over" ? "animate-pulse" : ""} rounded-lg border bg-[#F1F0F0] p-4`}
    >
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
  );
};

const LiveScores: React.FC<LiveScoresProps> = ({ competition, scores }) => {
  return (
    <section className="section p-4 bg-transparent">
      <SectionTitle title="Scores en direct" pageRef="/live-scores" />
      <h3 className="cursor-pointer mb-4 bg-blue-900 p-4 text-3xl font-semibold uppercase text-white">
        {competition}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {scores.map((match, index) => (
          <LiveScore key={index} match={match} />
        ))}
      </div>
    </section>
  );
};

export { LiveScores as default, LiveScore };
