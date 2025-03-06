import { type News } from "@ln-foot/app/_components/landingSections/News";
import { createTRPCRouter, publicProcedure } from "@ln-foot/server/api/trpc";

export const newsRouter = createTRPCRouter({
  latest: publicProcedure.query(({}) => {
    const news: News[] = [
      {
        imageRef: "/FB_IMG_1727680526207.png",
        posted_on: new Date(),
        description: "",
        summary:
          "In a nail-biting overtime showdown, the Lakers secured a hard-fought victory over the Warriors, with LeBron James delivering a clutch performance. The win positions the Lakers as serious playoff contenders this season.",
        title: "AIGLE ROYAL : VAINQUEUR DE LA COUPE DU CAMEROUN",
      },
      {
        imageRef: "/FB_IMG_1727680526237.png",
        posted_on: new Date(),
        description: "",
        summary:
          "This season’s rookies are proving they’re here to stay. Check out the emerging players making an early impact.",
        title: "SAMUEL ETO’O AU 74e congrès de la fifa a bangkok",
      },
      {
        imageRef: "/FB_IMG_1727680526238.png",
        posted_on: new Date(),
        description: "",
        summary:
          "As the trade deadline approaches, we analyze potential moves that could reshape team rosters and playoff odds.",
        title: "rigobert song nouveau selection de la  centrafique",
      },
      {
        imageRef: "/FB_IMG_1727680526239.png",
        posted_on: new Date(),
        description: "",
        summary:
          "An in-depth analysis of the top MVP candidates and what sets them apart as the season progresses.",
        title: "LES MOTS FORTS DU MINISTRE DES SPORTS ",
      },
    ];
    return { news };
  }),
});
