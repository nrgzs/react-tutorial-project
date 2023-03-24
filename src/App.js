import './style.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import data from './data.js';

function App() {
  const cards = data.map((user) => {
    return <Card key={user.id} user={user} />;
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
