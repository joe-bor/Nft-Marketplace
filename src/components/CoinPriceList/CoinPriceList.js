import styles from './CoinPriceList.module.scss';
import CoinPrice from '../CoinPrice/CoinPrice';

function CoinPriceList({ coin }) {
	const coinImgMapping = {
		'avalanche-2': 'avax',
		binancecoin: 'bnb',
		bitcoin: 'btc',
		cardano: 'ada',
		dogecoin: 'doge',
		ethereum: 'eth',
		litecoin: 'ltc',
		ripple: 'xrp',
		'shiba-inu': 'shib',
		uniswap: 'uni',
		vechain: 'vet'
	};

	const newCoins = Object.keys(coin).map((coinName) => {
		const coinInfo = coin[coinName];
		const price = coinInfo.usd;
		const img = `./public/img/coin/${coinName}.svg`;
		const imgName = coinImgMapping[coinName];

		return {
			name: coinName,
			price: price,
			img: img,
			imgName
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
					imgPath={coin.imgName}
				/>
			))}
		</aside>
	);
}
export default CoinPriceList;
