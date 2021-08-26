import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/provider';
import Home from './pages/home';
import Checkout from './pages/checkout';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/purchase' component={Checkout} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
