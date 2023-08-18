import styles from './LineItem.module.scss';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
	return (
		<div className={styles.LineItem}>
			<img className={styles.logo} src={lineItem.item.imgPath} />
			<div className="flex-ctr-ctr flex-col">
				<span className="align-ctr">{lineItem.item.name}</span>
				<span>
					$ {lineItem.item.price.toFixed(2)} <sub>/ea</sub>
				</span>
			</div>
			<div
				className={styles.qty}
				style={{ justifyContent: isPaid && 'center' }}
			>
				{!isPaid && (
					<button
						className="btn-xs"
						onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
					>
						−
					</button>
				)}
				<span>{lineItem.qty}</span>
				{!isPaid && (
					<button
						className="btn-xs"
						onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
					>
						+
					</button>
				)}
			</div>
			<div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
		</div>
	);
}
