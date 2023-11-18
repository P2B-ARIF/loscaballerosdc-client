import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllProducts from "./pages/Dashboard/AllProducts";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Dashboard/Login";
import PrivateRoute from "./routes/PrivateRoute";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Products from "./pages/Dashboard/Products";
import { Toaster } from "react-hot-toast";
// import AllProducts from "./pages/Dashboard/AllProducts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/menu", element: <Menu /> },
			{ path: "/about", element: <About /> },
			{ path: "/contact-us", element: <ContactUs /> },
			{ path: "*", element: <ErrorPage /> },
		],
	},
	{
		path: "/dashboard",
		element: <AdminLayout />,
		children: [
			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<AllProducts />
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/:item",
				element: (
					<PrivateRoute>
						<Products />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
	{
		path: "/dashboard/login",
		element: <Login />,
	},
]);

const App = () => {
	return (
		<ChakraProvider>
			<Provider store={store}>
				<Toaster position='top-right' reverseOrder={false} />
				<RouterProvider router={router} />
			</Provider>
		</ChakraProvider>
	);
};

export default App;
