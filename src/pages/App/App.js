import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
	const [user, setUser] = useState(getUser());
	const [showLogin, setShowLogin] = useState(true);

	return (
		<main className={styles.App}>
			<NavBar
				user={user}
				setUser={setUser}
				setShowLogin={setShowLogin}
				showLogin={showLogin}
			/>
			{user ? (
				<>
					<Routes>
						{/* client-side route that renders the component instance if the path matches the url in the address bar */}
						<Route
							path="/orders/new"
							element={<NewOrderPage user={user} setUser={setUser} />}
						/>
						<Route
							path="/orders"
							element={<OrderHistoryPage user={user} setUser={setUser} />}
						/>
						{/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
						<Route path="/*" element={<Navigate to="/orders/new" />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} showLogin={showLogin} />
			)}
		</main>
	);
}
