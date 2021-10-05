import './App.css';
import HomePage from './componets/HomePage/index';
import Search from './componets/Search/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
