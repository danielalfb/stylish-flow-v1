import { Box, createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import MainLayout from './components/MainLayout';

const theme = createTheme({
	palette: {
		white: {
			main: '#fff'
		},
		background: {
			main: 'F8F8F8'
		},
		primary: {
			main: '#003352',
		},
		secondary: {
			main: '#089DA3',
		},
		text: {
			main: '#6B7280'
		}
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainLayout>
      its working
			</MainLayout>
		</ThemeProvider>
	);
}

export default App;
