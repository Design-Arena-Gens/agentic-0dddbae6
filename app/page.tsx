import ScriptSection from "../components/ScriptSection";

const scriptParagraphs = [
  "Did you know that octopuses have three hearts and blue blood? Yeah, you heard that right – THREE hearts!",
  "Two of these hearts pump blood to their gills, while the third pumps blood to the rest of their body.",
  "But here's where it gets even crazier – when an octopus swims, the main heart actually stops beating, which is why they prefer crawling along the ocean floor instead of swimming. It's literally exhausting for them!",
  "And that blue blood? It's because they use copper-based proteins called hemocyanin to carry oxygen, unlike humans who use iron-based hemoglobin. This actually makes their blood more efficient in cold, low-oxygen environments.",
  "But wait, there's more! Each of their eight arms has its own mini-brain that can act independently. That means an octopus is basically a distributed intelligence system with nine brains working together!",
  "So next time someone calls you heartless, just remind them that at least you're not an octopus with a lot more to manage!"
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__badge">One-Minute Science</div>
        <h1 className="hero__title">Why Octopuses Are the Weirdest Geniuses Underwater</h1>
        <p className="hero__subtitle">
          A punchy, one-minute YouTube script that delivers wild octopus facts with
          energy and flair.
        </p>
      </section>

      <ScriptSection
        title="YouTube Script"
        duration="~1 minute"
        paragraphs={scriptParagraphs}
      />

      <section className="quick-facts">
        <h2>Quick Facts</h2>
        <ul>
          <li>3 hearts: 2 for gills, 1 for the body</li>
          <li>Hemocyanin makes their blood blue and cold-water ready</li>
          <li>Main heart pauses during swimming, so crawling is easier</li>
          <li>9 brains total: 1 central and 8 arm controllers</li>
        </ul>
      </section>
    </main>
  );
}
