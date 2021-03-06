import Header from './components/header/Header';
import Home from './components/Home/home';
import Cart from './components/cart/Cart'
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/contextProvider';
import DetailView from './components/product/DetailView'
import { Box } from '@material-ui/core';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
  <TemplateProvider>
    <ContextProvider>
    <BrowserRouter>
      <Header />
      <Box style={{marginTop: 54}}>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:id" component={DetailView} />
      </Switch>
    </Box>
    </BrowserRouter>
    </ContextProvider>
  </TemplateProvider>
  );
}

export default App;
