import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StagewiseToolbar } from '@stagewise/toolbar-react';

const stagewiseConfig = { plugins: [] };

if (import.meta.env.MODE === 'development') {
  const toolbarRoot = document.createElement('div');
  toolbarRoot.id = 'stagewise-toolbar-root';
  document.body.appendChild(toolbarRoot);
  createRoot(toolbarRoot).render(
    <StagewiseToolbar config={stagewiseConfig} />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
); 