export default function Button({ label }) {
    return (
      <section>
      <button className="button1">
        {label} <p>QUERO CONTRATAR</p>
      </button>
      <button className="button2">
        {label} <p>QUERO TRABALHAR</p>
      </button>
      </section>
     );
}