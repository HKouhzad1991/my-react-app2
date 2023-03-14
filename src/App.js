import Card from "./Card";
function App() {
  const cards = [
    { shoeName: "Nike", shoePic: "./images/01.png" },
    { shoeName: "adidas", shoePic: "./images/02.png" },
    { shoeName: "Puma", shoePic: "./images/03.png" },
  ];

  return (
    <>
      <header>header</header>
      <section>
        <div className="row">
          <Card {...cards[0]} />
          <Card {...cards[1]} />
          <Card {...cards[2]} />
        </div>
      </section>
      <footer>footer</footer>
    </>
  );
}
export default App;
