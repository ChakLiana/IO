import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from './components/Appbar/Appbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Grids from './components/Containers/Container'
import Auth from './components/Auth/Auth'


const App = () => {
 
  return (
 <BrowserRouter>
    <Container maxWidth="lg">
      <Appbar/>
      <Switch> 
           <Route path='/' exact component={Grids}/>
           <Route path='/auth' exact component={Auth}/>
      </Switch>

   </Container>

  </BrowserRouter>
  );
};

export default App;
