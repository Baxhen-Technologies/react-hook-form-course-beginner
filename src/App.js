import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import NativeForm from './pages/native-form';
import MaterialForm from './pages/material-ui-form';
import MultiStepForm from './pages/mutl-step-form';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/native-form" component={NativeForm} />
            <Route exact path="/material-ui-form" component={MaterialForm} />
            <Route path="/" component={MultiStepForm} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
