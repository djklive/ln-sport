import { HydrateClient } from "@ln-foot/trpc/server";
import { type News } from "../../_components/landingSections/News";
import Footer from "../../_components/Footer";
import { formatDate } from "@ln-foot/utils";

export default async function NewsPage() {
  const latestNews: News = {
    imageRef: "/FB_IMG_1727680526207.png",
    posted_on: new Date(),
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa officiis sed facere quo doloremque quasi nobis eaque praesentium aspernatur at dolor molestias aperiam esse illum hic est, saepe ea autem. Soluta numquam obcaecati velit, dicta voluptas quaerat perferendis! Excepturi vel repudiandae porro sint delectus. Nam eius incidunt voluptatem architecto magni fuga perferendis sequi odit cupiditate nobis corrupti amet sed minima hic sit, eligendi vero aliquid repellat, recusandae voluptate laborum reiciendis. Temporibus, explicabo corporis! Repellendus id temporibus quibusdam tempora vero. Nulla dolorem atque amet cupiditate distinctio deserunt, quas fuga ratione corporis et quis delectus magni nisi assumenda vitae modi quos ab?",
    summary:
      "In a nail-biting overtime showdown, the Lakers secured a hard-fought victory over the Warriors, with LeBron James delivering a clutch performance. The win positions the Lakers as serious playoff contenders this season.",
    title: "AIGLE ROYAL : VAINQUEUR DE LA COUPE DU CAMEROUN",
  };

  return (
    <HydrateClient>
      <section className="p-6">
        <div className="section-title">
          <h2 className="header-2">{latestNews?.title}</h2>
        </div>
        <div className="grid gap-10">
          <div className="bg-base-100">
            <figure>
              <img
                src={latestNews?.imageRef ?? "/ln-icon.svg"}
                alt="Football News"
              />
            </figure>
            <div className="card-body px-0">
              <p>{latestNews && formatDate(latestNews.posted_on)}</p>
              <p>{latestNews.description}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </HydrateClient>
  );
}
