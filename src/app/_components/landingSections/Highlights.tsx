import React from "react";

export type Highlight = {
  title: string;
  imageRef: string;
};

type HighlightsProps = {
  highlights: Highlight[];
};

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <section className="p-4">
      <div className="section-title">
        <h3 className="header-2">Points Forts</h3>
        <kbd className="ghost-btn">Voir Plus &gt;</kbd>
      </div>

      <div className="grid grid-flow-row justify-center gap-4 md:grid-flow-col">
        {highlights.map(({ title: highlight, imageRef: image_ref }, index) => (
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
