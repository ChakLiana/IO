import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from './components/Appbar/Appbar'
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Grids from './components/Containers/Container'
import Auth from './components/Auth/Auth'
import Details from './components/Details/Details'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
 <BrowserRouter>
    <Container maxWidth="xl">
      <Appbar/>
      <Switch>
           <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Grids} />
          <Route path="/posts/search" exact component={Grids} />
          <Route path="/posts/:id" exact component={Details} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
      </Switch>

   </Container>

  </BrowserRouter>
  );
};

export default App;
