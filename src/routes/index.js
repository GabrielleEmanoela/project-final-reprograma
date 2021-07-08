import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageMain from '~/views/main';
import Card from '~/components/Card';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PageMain} />
        <Route path="/Explore" component={Card} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
