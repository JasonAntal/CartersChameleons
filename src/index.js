import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Main from './main.tsx';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
          <App/>
        </React.StrictMode>
    );
/*
ReactDOM.render(<Main />, document.getElementById('root'));

*/