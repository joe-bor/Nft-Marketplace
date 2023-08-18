import React, { useState, useEffect } from 'react';
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
	const [coin, setCoin] = useState('null');

	const url =
		'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cdogecoin%2Cshiba-inu%2Cbinancecoin%2Cripple%2Cavalanche-2%2Cuniswap%2Cvechain%2Clitecoin&vs_currencies=usd';
	const getCoin = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			// console.log(data);
			setCoin(data);
		} catch (e) {
			console.error(e);
		}
	};

	// useEffect(() => {
	// 	getCoin();
	// }, []);

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
						<Route path="/orders/new" element={<NewOrderPage coin={coin} />} />
						<Route path="/orders" element={<OrderHistoryPage />} />
						{/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
						<Route path="/*" element={<Navigate to="/orders/new" />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} showLogin={showLogin} coin={coin} />
			)}
		</main>
	);
}
