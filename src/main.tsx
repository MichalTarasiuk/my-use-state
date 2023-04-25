import ReactDOM from 'react-dom/client';

import {App} from './app';

import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw Error('rootElement is not defined');
}

const root = ReactDOM.createRoot(rootElement);

export const renderRoot = () => {
  root.render(<App />);
};

renderRoot();
