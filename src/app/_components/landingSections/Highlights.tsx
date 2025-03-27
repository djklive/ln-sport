import React from "react";
import { SectionTitle } from "../common/section-title";

export type Highlight = {
  id: string;
  title: string;
  videoRef: string;
  publishedAt: Date;
};

type HighlightsProps = {
  highlights: Highlight[];
};

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <section className="m-4 p-2">
      <SectionTitle title="Points Forts" pageRef="/highlights" />
      <div className="grid justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ title, videoRef }, index) => (
          <div key={index} className="card gap-2">
            <div className="card-title">{title}</div>
            <video className="rounded-xl" id="video1" controls>
              <source className="size-auto" src={videoRef} />
              Your browser does not support HTML video.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
