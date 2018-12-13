import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ContextOneProvider } from './ContextOne';
import { App } from './App';

  ReactDOM.render(
  <ContextOneProvider>
    <App/>
  </ContextOneProvider>, document.getElementById('root'))
