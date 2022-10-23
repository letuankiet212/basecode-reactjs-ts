import { Theme } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

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
            background-color: ${lightBlue[200]}
        }
        
        .content-default-layout{
            min-height: calc(100vh - (var(--mui-header-height) + var(--mui-footer-height)))
        }
    `,
} as const;
