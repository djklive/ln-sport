import React from "react";

type HighlightsProps = {
  highlights: string[];
};

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <section className="bg-gray-100 p-6">
      <h3 className="mb-4 text-xl font-semibold">Points Forts</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="rounded-lg bg-white p-4 shadow">
            {highlight}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
