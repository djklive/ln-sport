import Image from "next/image";
import React from "react";

export type Actuality = {
  title: string;
  summary: string;
  posted_on: Date;
  image_ref: string;
};

type ActualityProps = {
  actualities: Actuality[];
};

const Actualities: React.FC<ActualityProps> = ({
  actualities: [sportUpdate, ...sportUpdates],
}) => {
  return (
    <section className="rounded-lg bg-white p-6 shadow-lg">
      <h3 className="header-2">
        Actualites sportives
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card bg-base-100">
          <figure className="w-full">
            <img
              className="min-h-full min-w-full"
              src={sportUpdate?.image_ref ?? "/ln-icon.svg"}
              alt="Football News"
            />
          </figure>
          <div className="card-body">
            <p>{sportUpdate?.posted_on.toDateString()}</p>
            <h2 className="card-title">{sportUpdate?.title}</h2>
            <p>{sportUpdate?.summary}</p>
          </div>
        </div>
        <div className="grid gap-4">
          {sportUpdates.map((actuality, i) => (
            <ActivityComponent key={i} actuality={actuality} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actualities;

const ActivityComponent: React.FC<{ actuality: Actuality }> = ({
  actuality,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl lg:card-side">
      <figure className="w-full">
        <img
          className="min-h-full min-w-full"
          src={actuality?.image_ref ?? "/ln-icon.svg"}
          alt="Football News"
        />
      </figure>
      <div className="card-body">
        <p>{actuality?.posted_on.toDateString()}</p>
        <h2 className="card-title">{actuality.title}</h2>
        <p>{actuality.summary}</p>
      </div>
    </div>
  );
};
