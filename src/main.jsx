import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
// import './index.css'
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <Notifications position="top-right" zIndex={999999999999} />
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
