import styles from './NavBar.module.scss';
import UserLogOut from '../UserLogOut/UserLogOut';

function NavBar({ user, setUser, showLogin, setShowLogin }) {
	function handleAuthToggle(e) {
		setShowLogin(!showLogin);
	}

	const disableButton = showLogin ? true : false;

	return (
		<div className={styles.NavBar}>
			<h1 className={styles.title}>Nft Marketplace</h1>
			<div className={styles.buttonContainer}>
				<button
					className={user ? styles.hidden : styles.buttons}
					onClick={handleAuthToggle}
					disabled={!disableButton}
				>
					Sign Up
				</button>
				{user ? (
					<UserLogOut user={user} setUser={setUser} />
				) : (
					<button
						className={styles.buttons}
						onClick={handleAuthToggle}
						disabled={disableButton}
					>
						Login
					</button>
				)}
			</div>
		</div>
	);
}
export default NavBar;

//conditionally render sign up, make hidden when there is a user
