import { ArrowUpRight } from 'lucide-react'

export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <div className="article-image">
        <img src={article.image} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="article-content">
        <div className="article-meta">
          <span>{article.category}</span>
          <time>{article.date}</time>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <button className="text-link" type="button">
          Leer artículo <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  )
}
