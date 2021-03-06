import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import App from './App';
import EventDetailPage from './EventDetailPage';
import RegisteredEventsPage from './RegisteredEventsPage';
import { AppProvider } from './AppContext';
import './scss/index.scss';
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const __MODULE_DATA__ = JSON.parse(
  document.querySelector('[type="application/json"]').textContent,
);

const root = document.getElementById('root');
const portalId = Number(root.dataset.portalId);
ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <AppProvider portalId={portalId} moduleData={__MODULE_DATA__}>
      <Switch>
        <Route exact path="/events" component={App} />
        <Route path="/events/:slug" component={EventDetailPage} />
        <Route exact path="/my-events" component={RegisteredEventsPage} />
        <Route component={App} />
      </Switch>
    </AppProvider>
  </BrowserRouter>,
  root,
);
