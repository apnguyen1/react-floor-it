import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FloorIt from './FloorIt.tsx';

createRoot(document.getElementById('bodys')!).render(
  <StrictMode>
    <FloorIt />
  </StrictMode>,
);
