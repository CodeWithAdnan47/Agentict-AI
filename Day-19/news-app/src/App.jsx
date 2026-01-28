import "./app.css";

/* ====== DATA ====== */
const articleData = [ /* (same data you provided, unchanged) */ 
  {
    id: '1',
    author: 'Emma Chen',
    title: 'Quantum Computing Breakthrough Promises New Era of Data Processing',
    description: 'Scientists have achieved a major milestone in quantum computing, demonstrating sustained quantum coherence for over 10 minutes at room temperature.',
    urlToImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=60',
    category: 'technology'
  },
  {
    id: '2',
    author: 'Marcus Johnson',
    title: 'Global Climate Summit Reaches Historic Carbon Agreement',
    description: 'World leaders have committed to a binding 70% reduction in carbon emissions by 2035.',
    urlToImage: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f31?auto=format&fit=crop&w=800&q=60',
    category: 'environment'
  },
  {
    id: '3',
    author: 'Olivia Rodriguez',
    title: 'Neural Interface Allows Paralyzed Patients to Control Robotic Limbs',
    description: 'A revolutionary brain-computer interface has enabled patients to control robotic limbs.',
    urlToImage: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?auto=format&fit=crop&w=800&q=60',
    category: 'health'
  },
  {
    id: '4',
    author: 'David Kim',
    title: 'Cryptocurrency Market Stabilizes as Central Banks Adopt Regulations',
    description: 'Cryptocurrency markets show stability after new regulatory frameworks.',
    urlToImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=60',
    category: 'finance'
  },
  {
    id: '5',
    author: 'Sarah Williams',
    title: 'AI System Passes Medical Licensing Exam',
    description: 'An AI system has successfully passed a medical licensing exam.',
    urlToImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=60',
    category: 'technology'
  },
  {
    id: '6',
    author: 'James Wilson',
    title: 'Fusion Reactor Achieves Net Energy Production',
    description: 'Fusion reactor maintains net positive energy output.',
    urlToImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=60',
    category: 'science'
  }
];

/* ====== COMPONENTS ====== */

function Header() {
  return (
    <header className="header">
      <div className="logo">HINDU</div>
      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return <section className="hero">HERO SECTION</section>;
}

function Article({ article }) {
  const { title, description, urlToImage } = article;

  return (
    <div className="article-card">
      <img src={urlToImage} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Articles() {
  return (
    <section className="articles">
      <h2>Articles</h2>
      <div className="articles-grid">
        {articleData.map((item) => (
          <Article key={item.id} article={item} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2028 All rights reserved</p>
      <div className="socials">
        <span>F</span>
        <span>T</span>
        <span>I</span>
      </div>
    </footer>
  );
}

/* ====== APP ====== */

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </>
  );
}

export default App;

