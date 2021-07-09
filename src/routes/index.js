import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PageMain from '~/views/main';
import Secondary from '~/views/secondary';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={PageMain} />
        <Route path="/explore" component={Secondary} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
