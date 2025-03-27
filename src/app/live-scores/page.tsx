import { api, HydrateClient } from "@ln-foot/trpc/server";
import Link from "next/link";
import { Fragment } from "react";
import { LiveScore } from "../_components/landingSections/LiveScores";

export default async function LiveScoresPage() {
  const { scores } = await api.score.latest();
  const competitions = [
    { label: "MTN ELITE ONE", scores: [...scores, ...scores] },
    { label: "MTN ELITE TWO", scores },
    { label: "MATCHS INTERNATIONAUX", scores: scores.slice(0, 2) },
    { label: "LIGUE 1", scores: scores.slice(0, 1) },
    { label: "PREMIER LEAGUE", scores: [...scores, ...scores, ...scores] },
    { label: "BUNDESLIGA", scores: [] },
  ];

  return (
    <HydrateClient>
      <section className="flex items-center justify-center">
        <div className="grid w-full gap-4 p-6 lg:w-1/2">
          <div>
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Score en direct </li>
              </ul>
            </div>
            <h2 className="header-2">Score en Direct</h2>
          </div>
          <div className="m-2 h-12 w-full">
            <label className="input flex items-center gap-1 border-gray-300">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
          <div className="tabs-border hidden md:tabs">
            {competitions.map(({ label, scores }, i) => (
              <Fragment key={i}>
                <input
                  type="radio"
                  name="competition"
                  className="tab"
                  aria-label={label}
                  defaultChecked={i === 0}
                />
                <div className="tab-content border-t-base-300 bg-base-100 p-10">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {scores.map((match, index) => (
                      <LiveScore key={index} match={match} />
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="bg-base-10 join join-vertical block w-full md:hidden">
            {competitions.map(({ label, scores }, i) => (
              <div
                className="collapse join-item collapse-arrow border-base-300"
                key={i}
              >
                <input
                  type="radio"
                  name="competition"
                  aria-label={label}
                  defaultChecked={i == 0}
                />
                <div className="collapse-title font-semibold">{label}</div>
                <div className="collapse-content">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {scores.map((match, index) => (
                      <LiveScore key={index} match={match} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HydrateClient>
  );
}
