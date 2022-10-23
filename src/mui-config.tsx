//Github https://github.com/karpolan/react-mui-pro-starter/tree/main/src/components

import { createTheme, ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material/';
import global from './assets/style/base/global';
import typography from './assets/style/base/typography';
import variables from './assets/style/abstracts/variables';

const DEFAULT_THEME = {
	palette: {
		...variables,
	},
	typography,
	components: {
		MuiCssBaseline: {
			...global,
		},
	},
};

type PropsData = {
	children: JSX.Element;
};

const AppThemeProvider = ({ children }: PropsData) => {
	const theme = createTheme(DEFAULT_THEME);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export { AppThemeProvider, DEFAULT_THEME };
