import React from 'react'
import {BrowserRouter , Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import '../global-styles/global.scss'
import '../global-styles/media.scss'

function App(){
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;