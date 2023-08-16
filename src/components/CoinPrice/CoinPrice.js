import styles from './CoinPrice.module.scss';

function CoinPrice({ name, price, imgPath }) {
	return (
		<div className={styles.CoinPrice}>
			<img src={imgPath}></img>
			<p>{name}</p>
			<p>{price}</p>
		</div>
	);
}

export default CoinPrice;
