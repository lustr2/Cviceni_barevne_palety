import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import VykresliPaletu from './component/Paleta';

const App = () => {

  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>        
        {palettes.map(p => <VykresliPaletu key={p.colors} name={p.name} attrib={p.attribution}  colors={p.colors} descr={p.description} image={p.image} direction={p.direction} >Moje paleta - vse</VykresliPaletu>)}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
