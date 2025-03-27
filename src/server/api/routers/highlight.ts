import { type Highlight } from "@ln-foot/app/_components/landingSections/Highlights";
import { createTRPCRouter, publicProcedure } from "@ln-foot/server/api/trpc";
import { z } from "zod";

const highlights: Highlight[] = [
  {
    id: "highlight",
    publishedAt: new Date(),
    title: "🏆 Meilleur Joueur de la Semaine",
    videoRef:
      "https://videos.pexels.com/video-files/6077718/6077718-uhd_2560_1440_25fps.mp4",
  },
  {
    id: "highlight1",
    publishedAt: new Date(),
    title: "🔥 Matchs les Plus Attendus",
    videoRef:
      "https://videos.pexels.com/video-files/2657251/2657251-uhd_2560_1440_24fps.mp4",
  },
  {
    id: "highlight2",
    publishedAt: new Date(),
    title: "📸 Photos Exclusives",
    videoRef:
      "https://videos.pexels.com/video-files/3513657/3513657-uhd_2560_1440_30fps.mp4",
  },
  {
    id: "highlight3",
    publishedAt: new Date(),
    title: "📸 Photos Exclusives II",
    videoRef:
      "https://videos.pexels.com/video-files/6078634/6078634-uhd_2560_1440_25fps.mp4",
  },
];
export const highlightRouter = createTRPCRouter({
  latest: publicProcedure.query(({}) => {
    return { highlights };
  }),
  findOne: publicProcedure
    .input(z.object({ id: z.string() })) // Expecting `id` as input
    .query(async ({ input }) => {
      // Simulated database fetch
      const highlight = highlights.find((_) => _.id === input.id);
      return { highlight };
    }),
});
