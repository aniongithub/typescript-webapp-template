import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import MyThree from './components/Mythree';

const container = document.getElementById('root');
if (container)
{
  const root = createRoot(container);
  root.render(
    <App>
      <MyThree />
    </App>
  );
}