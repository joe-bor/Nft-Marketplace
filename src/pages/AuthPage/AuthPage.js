import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import CoinPriceList from '../../components/CoinPriceList/CoinPriceList';

export default function AuthPage({ setUser, showLogin, coin }) {
	return (
		<main className={styles.AuthPage}>
			<aside>
			<CoinPriceList coin={coin} />	
			</aside> 
			{showLogin ? (
				<LoginForm setUser={setUser} />
			) : (
				<SignUpForm setUser={setUser} />
			)}
		</main>
	);
}
