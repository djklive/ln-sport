import Footer from "../../_components/Footer";
import { formatDate } from "@ln-foot/utils";
import { api, HydrateClient } from "@ln-foot/trpc/server";
import { notFound } from "next/navigation";
import Link from "next/link";

interface UserPageProps {
  params: Promise<{ id: string }>;
}
export default async function HighlightPage({ params }: UserPageProps) {
  const { highlight } = await api.highlight.findOne({
    id: (await params).id,
  });

  if (!highlight) {
    notFound();
  }

  return (
    <HydrateClient>
      <section className="flex items-center justify-center">
        <div className="p-6 lg:w-2/3">
          <div className="">
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/highlights">Highlights</Link>
                </li>
                <li>{highlight.title.slice(0, 20)}...</li>
              </ul>
            </div>
            <h2 className="header-2">{highlight?.title}</h2>
          </div>
          <div className="grid gap-10">
            <video id="video1" controls>
              <source src={highlight.videoRef} />
              Your browser does not support HTML video.
            </video>
            <p>{highlight && formatDate(highlight.publishedAt)}</p>
          </div>
        </div>
      </section>
      <Footer />
    </HydrateClient>
  );
}
