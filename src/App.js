import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NativeForm from './pages/native-form';
import MaterialForm from './pages/material-ui-form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/native-form" component={NativeForm} />
          <Route exact path="/" component={MaterialForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
