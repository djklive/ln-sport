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
  actualities: [activity, ...activities],
}) => {
  return (
    <section className="rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-4xl font-semibold uppercase text-red-500">
        Actualites sportives
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Image
            width={1000}
            height={10}
            src={activity?.image_ref ?? "/ln-icon.svg"}
            alt="Football News"
          />
          <p>{activity?.posted_on.toDateString()}</p>
          <h4 className="font-semibold uppercase">{activity?.title}</h4>
          <p>{activity?.summary}</p>
        </div>
        <div className="grid gap-4">
          {activities.map((actuality, i) => (
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
    <div className="card bg-base-100 shadow-xl grid md:grid-flow-col">
      <Image
        width={1000}
        height={100}
        src={actuality?.image_ref ?? "/ln-icon.svg"}
        alt="Football News"
      />
      <div className="card-body">
        <p>{actuality?.posted_on.toDateString()}</p>
        <h2 className="card-title">{actuality.title}</h2>
        <p>{actuality.summary}</p>
      </div>
    </div>
  );
};
