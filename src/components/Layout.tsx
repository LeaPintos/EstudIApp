import React from 'react';
import { Outlet } from 'react-router-dom';
import PomodoroWidget from './PomodoroWidget';

const Layout: React.FC = () => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', padding: '20px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ color: 'var(--accent-primary)', fontSize: '24px' }}>ESTUDIAPP // TERMINAL</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <PomodoroWidget />
    </div>
  );
};

export default Layout;
