import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppThemeProvider } from './mui-config';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<AppThemeProvider>
			<App />
		</AppThemeProvider>
	</React.StrictMode>,
);
