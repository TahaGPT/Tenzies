
import Die from './MainComponents/Die.jsx';
export default function MainComponent() {
    return (
      <main>
        <section className="mainSection">
          <Die num={1} />
          <Die num={2} />
          <Die num={3} />
          <Die num={4} />
          <Die num={5} />
          <Die num={6} />
          <Die num={7} />
          <Die num={8} />
          <Die num={9} />
          <Die num={0} />
        </section>
      </main>
    );
}