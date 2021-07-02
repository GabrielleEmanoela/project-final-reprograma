import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageMain from '../views/main';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={PageMain} />
    </BrowserRouter>
  );
}

export default Routes;
