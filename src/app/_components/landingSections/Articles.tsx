import { SectionTitle } from "../common/section-title";

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
    <div className="card max-w-md">
      <figure>
        <img src={article.imageRef} alt="Article" />
      </figure>
      <div className="card-body px-0">
        <h2 className="card-title">{article.title}</h2>
        <p>{article.description}</p>
        <div className="card-actions">
          <button className="btn w-full bg-base-secondary text-white">
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <section className="flex flex-col gap-4 p-4">
      <SectionTitle title="Nos meilleurs articles" />
      <div className="grid grid-flow-row justify-center gap-8 md:grid-flow-col">
        {articles.map((acticle, index) => (
          <Article key={index} article={acticle} />
        ))}
      </div>
    </section>
  );
};

export { Articles as default };
