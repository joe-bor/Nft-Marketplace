import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
	function handleLogOut() {
		logOut();
		setUser(null);
	}

	function getGreeting() {
		const currentHour = new Date().getHours();

		if (currentHour >= 6 && currentHour < 12) {
			return 'Good morning ☀️';
		} else if (currentHour >= 12 && currentHour < 18) {
			return 'Good afternoon ☀️';
		} else {
			return 'Good evening 🌙';
		}
	}

	return (
		<>
			<div className={styles.welcome}>
				<div>
					{getGreeting()}
				</div>
				<>
					 {user.name}
				</>
			</div>
			<div className={styles.UserLogOut}>
				<button className="btn-sm" onClick={handleLogOut}>
					LOG OUT
				</button>
			</div>
		</>
	);
}
