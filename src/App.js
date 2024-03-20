import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Countries } from './pages/Countries'
import { Root } from './pages/Root'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CountryInfo, loader as countryLoader } from './pages/CountryInfo'
import { Error } from './pages/Error'

function App() {
	const router = createBrowserRouter([
		{ path: '/', element: <Navigate to='/countries' /> },
		{
			path: 'countries',
			element: <Root />,
			errorElement: <Error />,
			children: [
				{ index: true, element: <Countries /> },
				{ path: ':countryID', element: <CountryInfo />, loader: countryLoader }
			],
		},
	])

	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
