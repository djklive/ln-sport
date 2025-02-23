import Image from "next/image";
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
      <h3 className="mb-4 text-3xl font-semibold uppercase">Points Forts</h3>
      <div className="grid grid-flow-row justify-center gap-4 md:grid-flow-col">
        {highlights.map(({ title: highlight, image_ref }, index) => (
          <div
            key={index}
            className="card bg-base-100 image-full h-64 w-72 border-r shadow-xl"
          >
            <figure>
              <Image
                width={100}
                height={10}
                src={image_ref}
                alt="Highlights"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>{highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
