import { Box, createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DeclaredRoutes from './routes';

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
			<BrowserRouter>
				<MainLayout>
					<DeclaredRoutes />
				</MainLayout>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
