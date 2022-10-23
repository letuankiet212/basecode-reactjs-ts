import { Theme } from '@mui/material';

/**
 * @style CssBaseLine,
 * @description Style for global,
 * @link docs : https://mui.com/material-ui/react-css-baseline/#main-content
 */
export default {
	styleOverrides: (themeParam: Theme) => `
        :root{
            --mui-header-height: 3.875rem;
            --mui-footer-height: 14.5rem;
        }

        body{
            background-color: ${themeParam.palette.secondary.contrastText}
        }
        
        .content-default-layout{
            min-height: calc(100vh - (var(--mui-header-height) + var(--mui-footer-height)))
        }
    `,
} as const;
