import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Game from './Game'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ShoppingList from './ShoppingList';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
ReactDOM.render(
  <ShoppingList name="say3no" item="macbook air" />,
  document.getElementById('list') as HTMLElement
);

ReactDOM.render(
  <Game />,
  document.getElementById('game') as HTMLElement

);



registerServiceWorker();
