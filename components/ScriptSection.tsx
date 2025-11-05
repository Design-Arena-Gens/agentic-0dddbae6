type ScriptSectionProps = {
  title: string;
  duration: string;
  paragraphs: string[];
};

export default function ScriptSection({
  title,
  duration,
  paragraphs
}: ScriptSectionProps) {
  return (
    <section className="script">
      <header className="script__header">
        <h2>{title}</h2>
        <span className="script__duration">{duration}</span>
      </header>
      <ol className="script__list">
        {paragraphs.map((paragraph, index) => (
          <li key={index} className="script__item">
            <p>{paragraph}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
