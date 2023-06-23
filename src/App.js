
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projetcs from './pages/Projetcs';
import About from './pages/About';
import Mail from './pages/Mail';
import inBuilding from './pages/inBuilding';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/projects' component={Projetcs} />
    <Route exact path='/about' component={About} />
    <Route exact path='/mail' component={Mail} />
    <Route exact path='/inBuilding' component={inBuilding} />

    </Switch> 
  </BrowserRouter>
  );
}

export default App;
