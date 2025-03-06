import { auth } from "@ln-foot/server/auth";
import { api, HydrateClient } from "@ln-foot/trpc/server";
import NewsList, { type News } from "./_components/landingSections/News";
import Footer from "./_components/Footer";
import HeroSection from "./_components/landingSections/HeroSection";
import Highlights, { type Highlight } from "./_components/landingSections/Highlights";
import LiveScores, { type Score } from "./_components/landingSections/LiveScores";
import Articles, { type Article } from "./_components/landingSections/Articles";

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
    { title: "🏆 Meilleur Joueur de la Semaine", imageRef: "/highlight.png" },
    { title: "🔥 Matchs les Plus Attendus", imageRef: "/highlight1.png" },
    { title: "📸 Photos Exclusives", imageRef: "/highlight2.png" },
    { title: "📸 Photos Exclusives II", imageRef: "/highlight3.png" },
  ];

  const news: News[] = [
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

  const articles: Article[] = [
    {
      description:
        "After months of rehab and dedication, a beloved NBA veteran made his inspiring return to the court. Fans and teammates celebrate his resilience and determination.",
      imageRef: "/article1.png",
      price: 10_000,
      title: "MAILLOT DE L’equipe nationale du cameroun",
    },
    {
      description:
        "From buzzer-beaters to game-saving blocks, last night’s games were packed with unforgettable moments. Dive into the highlights and relive the most intense plays.",
      imageRef: "/article2.png",
      price: 15_000,
      title: "GODASSE MONTANTE (predator)",
    },
    {
      description:
        "This year’s NBA All-Star Game will feature some fresh faces. Get to know the new All-Stars and how they earned their spot alongside the league’s elite.",
      imageRef: "/article3.png",
      price: 15_000,
      title: "BALLON ligue des champions",
    },
  ];

  return (
    <HydrateClient>
      <HeroSection title={"L'actualite du football en continu"} />
      <LiveScores competition="MTN Elite One" scores={scoresData} />
      <Highlights highlights={highlightsData} />
      <NewsList actualities={news} />
      <Articles articles={articles} />
      <Footer />
    </HydrateClient>
  );
}
