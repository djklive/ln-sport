export type Article = {
  price: number;
  title: string;
  imageRef: string;
  description: string;
};

type ArticlesProps = {
  articles: Article[];
};

const Article: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="card w-96">
      <figure>
        <img
          src={article.imageRef}
          alt="Article"
        />
      </figure>
      <div className="card-body px-0">
        <h2 className="card-title">{article.title}</h2>
        <p>{article.description}</p>
        <div className="card-actions">
          <button className="w-full btn text-white bg-base-secondary">Acheter</button>
        </div>
      </div>
    </div>
  );
};

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <section className="flex flex-col gap-4 p-4">
      <div className="section-title">
        <h3 className="header-2">Decouvrez nos meilleurs articles</h3>
        <kbd className="ghost-btn">Voir Plus &gt;</kbd>
      </div>
      <div className="grid grid-flow-row justify-center gap-8 md:grid-flow-col">
        {articles.map((acticle, index) => (
          <Article key={index} article={acticle} />
        ))}
      </div>
    </section>
  );
};

export { Articles as default };
