import Footer from "./components/Footer/Footer";
import "./styles.css";

export default function App() {
  return (
    <div>
      <nav>
        <div>Home</div>
        <ul>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </nav>
      <header>
        <h1>Welcome to JJ Creations</h1>
        <h2>Where creativity thrives</h2>
      </header>
      <main>
        <section>
          <h3>Projects</h3>
        </section>
        <section>
          <h3>About</h3>
        </section>
      </main>
     <Footer />
    </div>
  );
}
