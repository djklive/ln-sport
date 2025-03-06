import { type Article } from "@ln-foot/app/_components/landingSections/Articles";
import { createTRPCRouter, publicProcedure } from "@ln-foot/server/api/trpc";

export const articleRouter = createTRPCRouter({
  latest: publicProcedure.query(({}) => {
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
    return { articles };
  }),
});
