import React from 'react';
import './App.css';

interface AppProps {
  children?: React.ReactNode;
};

const App: React.FC<AppProps> = ({ children }) => {
    return (
      <div>
        {children}
      </div>
    );
}

export default App;