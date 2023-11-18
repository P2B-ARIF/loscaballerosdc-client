import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	// const { user, loading } = useSelector(state => state.user);
	const user = JSON.parse(localStorage.getItem("token"));

	if (!user) {
		return (
			<Navigate to={"/dashboard/login"} state={{ from: location }} replace>
				{children}
			</Navigate>
		);
	}

	return children;
};
export default PrivateRoute;
