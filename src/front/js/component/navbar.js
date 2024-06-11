import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();
	const [token, setToken] = useState(localStorage.getItem("token"));
	const location = useLocation();

	const handleLogOut = () => {
		actions.signOut();
		localStorage.removeItem("token");
		setToken(null);
		navigate('/')
	};

	useEffect(() => {
		const handleStorageChange = () => {
			setToken(localStorage.getItem("token"));
		};
		window.addEventListener('storage', handleStorageChange);
		return () => {
			window.removeEventListener('storage', handleStorageChange);
	};
}, []);

	return (
		<nav className="navbar navbar-expand-lg navbar-light navbar-custom">
			<div className="container-fluid mx-2">
				<div className="d-flex gap-3">
					<Link to="/">
						<img src="https://cdn.pixabay.com/photo/2022/03/08/18/30/penguin-7056315_1280.png" alt="Logo" className="logo d-inline-block align-top" />
					</Link>
				</div>
				{location.pathname !== "/private" && (
					<>
				{token ? (
						<Link to="/" className="text-decoration-none">
							<div className="btn btn-outline me-2" onClick={handleLogOut}>Cerrar sesión</div>
						</Link>
					) : (
						<div>
							<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
								<div className="offcanvas-body">
									<ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-3">
										<li className="nav-item mb-2" data-bs-toggle="offcanvas">
											<Link to="/login" className="btn btn-outline me-2">Iniciar sesión
											</Link>
										</li>
										<li className="nav-item mb-3" data-bs-toggle="offcanvas">
											<Link to="/signup" className="btn btn-outline">Registrarse
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
					</>
				)}
			</div>
		</nav>
	);
};






















// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../store/appContext";
// import "../../styles/index.css";

// export const Navbar = () => {

// 	const { store, actions } = useContext(Context)
// 	const navigate = useNavigate();
// 	const token = localStorage.getItem("token")

// 	const handleLogOut = () => {
// 		actions.signOut();
// 		navigate('/')
// 	};

// 	return (
// 		<nav className="navbar navbar-expand-lg navbar-light navbar-custom">
// 			<Link to="/" className="navbar-brand">
// 				<img src="https://cdn.pixabay.com/photo/2022/03/08/18/30/penguin-7056315_1280.png" alt="Logo" className="logo d-inline-block align-top" />
// 			</Link>
// 			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// 				<span className="navbar-toggler-icon"></span>
// 			</button>
// 			<div className="collapse navbar-collapse">
// 				<ul className="navbar-nav ml-auto">
// 					<li className="nav-item me-3">
// 						<Link to="/login" className="btn btn-outline">
// 						Iniciar sesión
// 						</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link to="/signup" className="btn btn-outline ml-2">
// 						Registrarse
// 						</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link to="/" className="btn btn-outline ml-2" onClick={handleLogOut}>
// 						Cerrar sesión
// 						</Link>
// 					</li>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };
