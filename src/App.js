import { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home';
import Checkout from './pages/checkout';
import GlobalStyle from './globalStyle';
import Context from './context';

function App() {
  const { theme } = useContext(Context);
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/purchase' component={Checkout} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider> 
  );
}

export default App;
