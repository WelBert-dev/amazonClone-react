import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="main-gridContainer">
        <header className="row">
            <div>
                <a className="brand" href="/">amazon</a>
            </div>
            <div>
                <a href="/cart">Carrinho</a>
                <a href="/signin">Logar</a>
            </div>
        </header>
        <main>
          <Outlet/>
        </main>
        <footer className="row center">
          Open Licence GPLv3
        </footer>
    </div>    
    
  );
}

export default App;
