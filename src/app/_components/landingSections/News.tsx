import { formatDate } from "@ln-foot/utils";
import React from "react";

export type News = {
  title: string;
  summary: string;
  posted_on: Date;
  image_ref: string;
};

type NewsListProps = {
  actualities: News[];
};

const News: React.FC<{ actuality: News }> = ({ actuality }) => {
  return (
    <div className="card bg-base-100 shadow-xl lg:card-side">
      <figure className="w-full">
        <img
          className="min-h-full min-w-full"
          src={actuality?.image_ref ?? "/ln-icon.svg"}
          alt="Football News"
        />
      </figure>
      <div className="card-body py-4">
        <p className="">{formatDate(actuality.posted_on)}</p>
        <h2 className="link-hover link card-title">{actuality.title}</h2>
        <p>{actuality.summary}</p>
      </div>
    </div>
  );
};

const NewsList: React.FC<NewsListProps> = ({
  actualities: [latestNews, ...news],
}) => {
  return (
    <section className="p-6">
      <div className="section-title">
        <h3 className="header-2">Actualites sportives</h3>
        <kbd className="ghost-btn">Voir Plus &gt;</kbd>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="card bg-base-100">
          <figure className="w-full">
            <img
              className="min-h-full min-w-full"
              src={latestNews?.image_ref ?? "/ln-icon.svg"}
              alt="Football News"
            />
          </figure>
          <div className="card-body px-0">
            <p>{latestNews && formatDate(latestNews.posted_on)}</p>
            <h2 className="link-hover link card-title">{latestNews?.title}</h2>
            <p>{latestNews?.summary}</p>
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
