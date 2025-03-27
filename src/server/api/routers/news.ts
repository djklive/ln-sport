import { type News } from "@ln-foot/app/_components/landingSections/News";
import { createTRPCRouter, publicProcedure } from "@ln-foot/server/api/trpc";
import { z } from "zod";

export const newsRouter = createTRPCRouter({
  latest: publicProcedure.query(({}) => {
    const news: News[] = [
      {
        id: "1727680526207",
        imageRef: "/FB_IMG_1727680526207.png",
        posted_on: new Date(),
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa officiis sed facere quo doloremque quasi nobis eaque praesentium aspernatur at dolor molestias aperiam esse illum hic est, saepe ea autem. Soluta numquam obcaecati velit, dicta voluptas quaerat perferendis! Excepturi vel repudiandae porro sint delectus. Nam eius incidunt voluptatem architecto magni fuga perferendis sequi odit cupiditate nobis corrupti amet sed minima hic sit, eligendi vero aliquid repellat, recusandae voluptate laborum reiciendis. Temporibus, explicabo corporis! Repellendus id temporibus quibusdam tempora vero. Nulla dolorem atque amet cupiditate distinctio deserunt, quas fuga ratione corporis et quis delectus magni nisi assumenda vitae modi quos ab?`,
        summary:
          "In a nail-biting overtime showdown, the Lakers secured a hard-fought victory over the Warriors, with LeBron James delivering a clutch performance. The win positions the Lakers as serious playoff contenders this season.",
        title: "AIGLE ROYAL : VAINQUEUR DE LA COUPE DU CAMEROUN",
      },
      {
        id: "1727680526237",
        imageRef: "/FB_IMG_1727680526237.png",
        posted_on: new Date(),
        description: "",
        summary:
          "This season’s rookies are proving they’re here to stay. Check out the emerging players making an early impact.",
        title: "SAMUEL ETO’O AU 74e congrès de la fifa a bangkok",
      },
      {
        id: "1727680526238",
        imageRef: "/FB_IMG_1727680526238.png",
        posted_on: new Date(),
        description: "",
        summary:
          "As the trade deadline approaches, we analyze potential moves that could reshape team rosters and playoff odds.",
        title: "rigobert song nouveau selection de la  centrafique",
      },
      {
        id: "1727680526239",
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
  findOne: publicProcedure
    .input(z.object({ id: z.string() })) // Expecting `id` as input
    .query(async ({ input }) => {
      // Simulated database fetch
      const news: News = {
        id: input.id,
        imageRef: "/FB_IMG_1727680526237.png",
        posted_on: new Date(),
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa officiis sed facere quo doloremque quasi nobis eaque praesentium aspernatur at dolor molestias aperiam esse illum hic est, saepe ea autem. Soluta numquam obcaecati velit, dicta voluptas quaerat perferendis! Excepturi vel repudiandae porro sint delectus. Nam eius incidunt voluptatem architecto magni fuga perferendis sequi odit cupiditate nobis corrupti amet sed minima hic sit, eligendi vero aliquid repellat, recusandae voluptate laborum reiciendis. Temporibus, explicabo corporis! Repellendus id temporibus quibusdam tempora vero. Nulla dolorem atque amet cupiditate distinctio deserunt, quas fuga ratione corporis et quis delectus magni nisi assumenda vitae modi quos ab?`,
        summary:
          "This season’s rookies are proving they’re here to stay. Check out the emerging players making an early impact.",
        title: "SAMUEL ETO’O AU 74e congrès de la fifa a bangkok",
      };

      return { news };
    }),
});
