import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/provider';
import Home from './pages/home';
import Checkout from './pages/checkout';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <GlobalStyle />
          <Route path='/purchase' component={Home} />
          <Route path='/' component={Checkout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
