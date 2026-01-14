import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

type ArticleType = {
  id: number;
  title: string;
  textContent: string;
};

function Home() {
  return (
    <div className="container">
      home page
      <br /> <Link to="/blog">Blog</Link>
    </div>
  );
}

function Blog({ articles }: { articles: ArticleType[] }) {
  return (
    <div className="container">
      <h1>lista artykułów</h1>
      {articles.length === 0 ? (
        <p>brak artykułów</p>
      ) : (
        <ul className="blog-list">
          {articles.map((art) => (
            <li key={art.id}>
              <Link to={`/article/${art.id}`}>{art.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Article({ articles }: { articles: ArticleType[] }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="container">
        <h2>Artykuł nie istnieje!</h2>
      </div>
    );
  }

  return (
    <div className="container article-view">
      <h1>{article.title}</h1>
      <p>{article.textContent}</p>
    </div>
  );
}

function AddBlog({
  onAdd,
}: {
  onAdd: (title: string, content: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return alert("Wypełnij wszystkie pola!");

    onAdd(title, content);
    navigate("/blog");
  };

  return (
    <div className="container">
      <h1>dodaj nowy artykuł</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <textarea
          rows={10}
          placeholder="text content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />{" "}
        <br />
        <button type="submit">DODAJ</button>
      </form>
    </div>
  );
}

export default function App() {
  const [articles, setArticles] = useState<ArticleType[]>(() => {
    const saved = localStorage.getItem("articles");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  const handleAddArticle = (title: string, content: string) => {
    const newArticle: ArticleType = {
      id: Date.now(),
      title,
      textContent: content,
    };
    setArticles([...articles, newArticle]);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |{" "}
        <Link to="/dodaj">Dodaj Artykuł</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog articles={articles} />} />
        <Route path="/article/:id" element={<Article articles={articles} />} />
        <Route path="/dodaj" element={<AddBlog onAdd={handleAddArticle} />} />
      </Routes>
    </BrowserRouter>
  );
}
