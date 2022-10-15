import { createTheme, ThemeProvider, StyledEngineProvider, CssBaseline, Theme } from '@mui/material/';

const FRONT_COLORS = {
	primary: {
		main: '#81c784',
		contrastText: '#000000',
	},
	secondary: {
		main: '#ffb74d',
		contrastText: '#000',
	},
	info: {
		main: '#0277bd',
		contrastText: '#FFFFFF',
	},
	success: {
		main: '#2e7d32',
		contrastText: '#FFFFFF',
	},
	warning: {
		main: '#f9a825',
		contrastText: '#FFFFFF',
	},
	error: {
		main: '#c62828',
		contrastText: '#FFFFFF',
	},
};

const DEFAULT_THEME = {
	palette: {
		...FRONT_COLORS,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: (themeParam: Theme) => `
				h1 {
					color: ${themeParam.palette.success.main};
				},
				body{
					background-color: ${themeParam.palette.secondary.contrastText}
				}
			`,
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
