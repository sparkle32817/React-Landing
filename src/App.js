import React from 'react';

import { Home } from './pages';
import {
  Header,
  Footer
} from './sections';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
