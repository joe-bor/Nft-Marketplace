import styles from './CoinPriceList.module.scss';
import CoinPrice from '../CoinPrice/CoinPrice';

function CoinPriceList({ coin }) {
	//! to add images later
	//! add src={coinImages[coinName]} prop to CoinPrice
	// const coinImages = {
	// 	binancecoin: 'binance.jpg',
	// 	bitcoin: 'bitcoin.jpg',
	// 	cardano: 'ada.jpg',
	// 	dogecoin: 'doge.jpg',
	// 	ethereum: 'eth.jpg',
	// 	'matic-network': 'matic.jpg',
	// 	ronin: 'ronin.jpg',
	// 	'shiba-inu': 'shib.jpg',
	// 	solana: 'sol.jpg',
	// 	'the-sandbox': 'sand.jpg'
	// };

	return (
		<aside className={styles.CoinPriceList}>
			<h1 className={styles.title}>Cryptocurrencies</h1>
			{Object.keys(coin).map((coinName) => {
				return (
					<CoinPrice
						key={coinName}
						name={coinName}
						price={coin[coinName].usd}
					/>
				);
			})}
		</aside>
	);
}
export default CoinPriceList;
