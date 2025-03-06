import React from "react";

export type Highlight = {
  title: string;
  image_ref: string;
};

type HighlightsProps = {
  highlights: Highlight[];
};

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <section className="bg-gray-100 p-6">
      <div className="flex justify-between text-red-500">
        <h3 className="header-2">Points Forts</h3>
        <kbd className="btn btn-ghost kbd uppercase">Voir Plus &gt;</kbd>
      </div>

      <div className="grid grid-flow-row justify-center gap-4 md:grid-flow-col">
        {highlights.map(({ title: highlight, image_ref }, index) => (
          <div key={index} className="highlight card">
            <figure>
              <img
                src={image_ref}
                alt="Highlights"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title absolute bottom-10">{highlight}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
