import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import NativeForm from './pages/native-form';
import MaterialForm from './pages/material-ui-form';
import MultiStepForm from './pages/mutl-step-form';
import { store } from './store';
import Home from './pages/home';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav className="nav">
          <div className="nav__container">
            <Link className="link__tag" to="/">
              Home
            </Link>
          </div>
        </nav>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/native-form" component={NativeForm} />
            <Route exact path="/material-ui-form" component={MaterialForm} />
            <Route path="/multi-steps" component={MultiStepForm} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
