import { formatDate } from "@ln-foot/utils";
import React from "react";
import { SectionTitle } from "../common/section-title";
import Link from "next/link";

export type News = {
  id: string;
  title: string;
  summary: string;
  posted_on: Date;
  imageRef: string;
  description: string;
};

type NewsListProps = {
  actualities: News[];
};

const News: React.FC<{ actuality: News }> = ({ actuality }) => {
  return (
    <div className="xs:flex items-center justify-center">
      <div className="xs:max-w-md card lg:card-side">
        <figure className="w-full">
          <img
            className="min-h-full min-w-full"
            src={actuality?.imageRef ?? "/ln-icon.svg"}
            alt="Football News"
          />
        </figure>
        <div className="xs:px-0 card-body py-4">
          <p className="">{formatDate(actuality.posted_on)}</p>
          <h2 className="link-hover link card-title">
            <Link href={`/news/${actuality.id}`}>{actuality.title}</Link>
          </h2>
          <p>{actuality.summary}</p>
        </div>
      </div>
    </div>
  );
};

const NewsList: React.FC<NewsListProps> = ({
  actualities: [latestNews, ...news],
}) => {
  return (
    <section className="bg-[#F1F0F0] p-6">
      <SectionTitle title="Actualites sportives" pageRef="/news" />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="xs:flex items-center justify-center">
          <div className="xs:max-w-md card">
            <figure className="w-full">
              <img
                className="min-h-full min-w-full"
                src={latestNews?.imageRef ?? "/ln-icon.svg"}
                alt="Football News"
              />
            </figure>
            <div className="xs:px-0 card-body">
              <p>{latestNews && formatDate(latestNews.posted_on)}</p>
              <h2 className="link-hover link card-title">
                {latestNews?.title}
              </h2>
              <p>{latestNews?.summary}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {news.map((actuality, i) => (
            <News key={i} actuality={actuality} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { NewsList as default, News };
