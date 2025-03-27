import { formatDate } from "@ln-foot/utils";
import { api, HydrateClient } from "@ln-foot/trpc/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "../_components/Footer";

export default async function NewsPage() {
  const {
    news: [latestNews, ...news],
  } = await api.news.latest();

  if (!latestNews) {
    return notFound();
  }

  return (
    <HydrateClient>
      <section className="lg:flex items-center justify-center">
        <div className="p-6 lg:w-1/2">
          <div className="">
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>News</li>
              </ul>
            </div>
            <h2 className="header-2">{latestNews?.title}</h2>
          </div>
          <div className="grid gap-10">
            <div className="bg-base-100">
              <figure>
                <img
                  style={{ width: "100%" }}
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
          <div className="divider"></div>
          <div className="grid gap-10 md:grid-cols-3">
            {news.map((actuality, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="card max-w-sm">
                  <figure className="w-full">
                    <img
                      className="min-h-full min-w-full"
                      src={actuality?.imageRef ?? "/ln-icon.svg"}
                      alt="Football News"
                    />
                  </figure>
                  <div className="card-body px-0 py-4">
                    <p>{formatDate(actuality.posted_on)}</p>
                    <h2 className="link-hover link card-title">
                      <Link href={`/news/${actuality.id}`}>
                        {actuality.title}
                      </Link>
                    </h2>
                    <p>{actuality.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </HydrateClient>
  );
}
