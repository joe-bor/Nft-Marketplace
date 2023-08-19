import styles from './Logo.module.scss';

export default function Logo({ imgPath }) {
	return (
		<div className={styles.Logo}>
			<img src={imgPath}/>
		</div>
	);
}
