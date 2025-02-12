import { auth } from "@ln-foot/server/auth";
import { api, HydrateClient } from "@ln-foot/trpc/server";
import LiveScores, { type Score } from "./_components/LiveScores";
import HeroSection from "./_components/HeroSection";
import Highlights from "./_components/Highlights";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  const scoresData: Score[] = [
    { team1: "Coton Sport", score1: 2, score2: 0, team2: "Union Sportive" },
    { team1: "Bamboutos", score1: 1, score2: 1, team2: "Dynamo" },
    { team1: "Fauve Azur", score1: 0, score2: 3, team2: "AS Fortuna" },
  ];

  const highlightsData: string[] = [
    "🏆 Meilleur Joueur de la Semaine",
    "🔥 Matchs les Plus Attendus",
    "📸 Photos Exclusives",
  ];

  return (
    <HydrateClient>
      <Header />
      <HeroSection title={"L'actualite du football en continu"} />
      <LiveScores competition="MTN Elite One" scores={scoresData} />
      <Highlights highlights={highlightsData} />
      <Footer />
    </HydrateClient>
  );
}
