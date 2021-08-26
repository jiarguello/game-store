import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/provider';
import Home from './pages/home';
import Checkout from './pages/checkout';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path='/purchase' component={Home} />
          <Route path='/' component={Checkout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
