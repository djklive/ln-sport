import { type Highlight } from "@ln-foot/app/_components/landingSections/Highlights";
import { createTRPCRouter, publicProcedure } from "@ln-foot/server/api/trpc";

export const highlightRouter = createTRPCRouter({
  latest: publicProcedure.query(({}) => {
    const highlights: Highlight[] = [
      { title: "🏆 Meilleur Joueur de la Semaine", imageRef: "/highlight.png" },
      { title: "🔥 Matchs les Plus Attendus", imageRef: "/highlight1.png" },
      { title: "📸 Photos Exclusives", imageRef: "/highlight2.png" },
      { title: "📸 Photos Exclusives II", imageRef: "/highlight3.png" },
    ];

    return { highlights };
  }),
});
