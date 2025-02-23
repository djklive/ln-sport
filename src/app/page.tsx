import { auth } from "@ln-foot/server/auth";
import { api, HydrateClient } from "@ln-foot/trpc/server";
import Actualities, { type Actuality } from "./_components/Actualities";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Highlights, { Highlight } from "./_components/Highlights";
import LiveScores, { type Score } from "./_components/LiveScores";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  const scoresData: Score[] = [
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

  const highlightsData: Highlight[] = [
    { title: "🏆 Meilleur Joueur de la Semaine", image_ref: "/highlight.png" },
    { title: "🔥 Matchs les Plus Attendus", image_ref: "/highlight1.png" },
    { title: "📸 Photos Exclusives", image_ref: "/highlight2.png" },
    { title: "📸 Photos Exclusives II", image_ref: "/highlight3.png" },
  ];

  const activities: Actuality[] = [
    {
      image_ref: "/FB_IMG_1727680526207.png",
      posted_on: new Date(),
      summary:
        "In a nail-biting overtime showdown, the Lakers secured a hard-fought victory over the Warriors, with LeBron James delivering a clutch performance. The win positions the Lakers as serious playoff contenders this season.",
      title: "AIGLE ROYAL : VAINQUEUR DE LA COUPE DU CAMEROUN",
    },
    {
      image_ref: "/FB_IMG_1727680526237.png",
      posted_on: new Date(),
      summary:
        "This season’s rookies are proving they’re here to stay. Check out the emerging players making an early impact.",
      title: "SAMUEL ETO’O AU 74e congrès de la fifa a bangkok",
    },
    {
      image_ref: "/FB_IMG_1727680526238.png",
      posted_on: new Date(),
      summary:
        "As the trade deadline approaches, we analyze potential moves that could reshape team rosters and playoff odds.",
      title: "rigobert song nouveau selection de la  centrafique",
    },
    {
      image_ref: "/FB_IMG_1727680526239.png",
      posted_on: new Date(),
      summary:
        "An in-depth analysis of the top MVP candidates and what sets them apart as the season progresses.",
      title: "LES MOTS FORTS DU MINISTRE DES SPORTS ",
    },
  ];

  return (
    <HydrateClient>
      <HeroSection title={"L'actualite du football en continu".toUpperCase()} />
      <LiveScores competition="MTN Elite One" scores={scoresData} />
      <Highlights highlights={highlightsData} />
      <Actualities actualities={activities} />
      <Footer />
    </HydrateClient>
  );
}
