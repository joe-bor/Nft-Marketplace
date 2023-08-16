import styles from './CoinPriceList.module.scss';
import CoinPrice from '../CoinPrice/CoinPrice';

function CoinPriceList({ coin }) {
	// re structure data
	const newCoins = Object.keys(coin).map((coinName) => {
		const coinInfo = coin[coinName];
		const price = coinInfo.usd;
		const img = `./public/img/coin/${coinName}.svg`;

		return {
			name: coinName,
			price: price,
			img: img // public path
		};
	});
	console.log(newCoins);

	return (
		<aside className={styles.CoinPriceList}>
			<h1 className={styles.title}>Cryptocurrencies</h1>
			{newCoins.map((coin) => (
				<CoinPrice
					key={coin.name}
					name={coin.name}
					price={coin.price}
					imgPath={coin.img}
				/>
			))}
		</aside>
	);
}
export default CoinPriceList;
