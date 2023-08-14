import styles from './NavBar.module.scss';
import UserLogOut from '../UserLogOut/UserLogOut';

function NavBar({ user, setUser }) {
	return (
		<div className={styles.NavBar}>
			<h1 className={styles.title}>NFT MARKETPLACE</h1>
			<div className={styles.buttonContainer}>
				<button className={user ? styles.hidden : styles.buttons}>
					Sign Up
				</button>
				{user ? (
					<UserLogOut user={user} setUser={setUser} />
				) : (
					<button className={styles.buttons}>Login</button>
				)}
			</div>
		</div>
	);
}
export default NavBar;

//conditionally render sign up, make hidden when there is a user
