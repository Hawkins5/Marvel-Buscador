import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './Pages/Characters/Characters';
import CharacterDetail from './Pages/Characters/CharacterDetail';
import Favorites from './Components/Favorites';
import { AppProvider } from './Contexts/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route exact path="/" component={Characters} />
          <Route exact path="/characters/:characterId" component={CharacterDetail} />
          <Route exact path="/favorites" component={Favorites} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
