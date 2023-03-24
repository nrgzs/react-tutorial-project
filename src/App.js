import './style.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import data from './data.js';
console.log(data);
function App() {
  const cards = data.map((user) => {
    return (
      <Card
        key={user.id}
        img={user.coverImg}
        rating={user.stats.rating}
        reviewCount={user.stats.reviewCount}
        country={user.location}
        title={user.title}
        price={user.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card_list">{cards}</section>
    </div>
  );
}

export default App;
