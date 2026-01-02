import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

posthog.init('phc_H3yCVhUTJ4dPbmpKG8aKtP1LTCd0cSN0QNedfWM74Ch', {
        api_host: 'https://us.i.posthog.com',
        capture_pageview: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);