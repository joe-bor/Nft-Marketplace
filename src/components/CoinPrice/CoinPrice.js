import styles from './CoinPrice.module.scss';

function CoinPrice({ name, price }) {
	return (
		<div className={styles.CoinPrice}>
			<p>Logo</p>
			<p>{name} </p>
			<p>{price} </p>
		</div>
	);
}
export default CoinPrice;
