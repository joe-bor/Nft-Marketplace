import styles from './CoinPrice.module.scss';

function CoinPrice({ name, price, imgPath }) {
	const imgUrl = `https://assets.coincap.io/assets/icons/${imgPath}@2x.png`;
	const capitalizedName = imgPath ? imgPath.toUpperCase() : null;
	return (
		<div className={styles.CoinPrice}>
			<img src={imgUrl} alt={name} className={styles.coinLogo}></img>
			<div className={styles.coinInfo}>
				<p>{capitalizedName ? capitalizedName : 'Loading...'}</p>
				<p>$ {price}</p>
			</div>
		</div>
	);
}

export default CoinPrice;
