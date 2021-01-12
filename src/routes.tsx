import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}
