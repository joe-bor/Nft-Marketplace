import styles from './NavBar.module.scss';
import UserLogOut from '../UserLogOut/UserLogOut';
import { signUp } from '../../utilities/users-api';
import * as usersService from '../../utilities/users-service';

function NavBar({ user, setUser, showLogin, setShowLogin }) {
	function handleAuthToggle(e) {
		setShowLogin(!showLogin);
	}

	const disableButton = showLogin ? true : false;

	/* --- MetaMask Button Functionality --- */
	async function getAccount() {
		const accounts = await window.ethereum.request({
		  method: "eth_requestAccounts",
		});
		const account = accounts[0];
		return account;
	}
	
		const connectButtonOnClick = async () => {
			try {
				if (
					typeof window !== "undefined" &&
					typeof window.ethereum !== "undefined"
					) {
						
						getAccount().then(async (response) => {
							const user = {
								name: response,
								email: `${response}@email`,
								password: `${response}`
							}
							await signUp(user)
							//! need to add jwt - follow token route
							const authUser = await usersService.login({"email": user.email, "password": user.password })
							setUser(authUser);
						})
					}
			} catch (error) {
				throw new Error('MetaMask Route Problems')
			}
		};

	return (
		<div className={styles.NavBar}>
			<h1 className={styles.title}>Nft Mark<span className='pop'>eth</span>place</h1>
			<div className={styles.buttonContainer}>
				<button
					className={user ? styles.hidden : styles.buttons}
					onClick={connectButtonOnClick}
				>
					MetaMask
				</button>

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
