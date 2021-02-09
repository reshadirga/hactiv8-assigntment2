import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Suspense} from "react";
import HomePortfolio from './pages/HomePortfolio/HomePortfolio';

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" component={HomePortfolio} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
