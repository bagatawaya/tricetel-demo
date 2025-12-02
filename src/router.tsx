import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Wizard from './pages/Wizard';
import Help from './pages/Help';

export default function Router() {
  const [page, setPage] = useState('dashboard');

  const PAGES: Record<string, JSX.Element> = {
    dashboard: <Dashboard />,
    wizard: <Wizard />,
    help: <Help />,
  };

  return (
    <div>
      <nav>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
        <button onClick={() => setPage('wizard')}>Wizard</button>
        <button onClick={() => setPage('help')}>Help</button>
      </nav>

      <div>{PAGES[page]}</div>
    </div>
  );
}
