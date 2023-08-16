import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './NewOrderPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import CoinPriceList from '../../components/CoinPriceList/CoinPriceList';

export default function NewOrderPage({ user, setUser, coin }) {
	const [menuItems, setMenuItems] = useState([]);
	const [activeCat, setActiveCat] = useState('');
	const [cart, setCart] = useState(null);
	const categoriesRef = useRef([]);
	const navigate = useNavigate();

	useEffect(function () {
		async function getItems() {
			const items = await itemsAPI.getAll();
			// iterate over all the items, and grab unique categories -> store them in the array
			categoriesRef.current = items.reduce((cats, item) => {
				const cat = item.category.name;
				return cats.includes(cat) ? cats : [...cats, cat];
			}, []);
			setMenuItems(items);
			// we use the first category in the array returned by .reduce above
			// set it to activeCat state
			setActiveCat(categoriesRef.current[0]);
		}
		getItems();
		async function getCart() {
			const cart = await ordersAPI.getCart();
			setCart(cart);
		}
		getCart();
	}, []);
	// Providing an empty 'dependency array'
	// results in the effect running after
	// the FIRST render only

	/*-- Event Handlers --*/
	async function handleAddToOrder(itemId) {
		const updatedCart = await ordersAPI.addItemToCart(itemId);
		setCart(updatedCart);
	}

	async function handleChangeQty(itemId, newQty) {
		const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
		setCart(updatedCart);
	}

	async function handleCheckout() {
		await ordersAPI.checkout();
		navigate('/orders');
	}

	return (
		<div className={styles.outsideContainer}>
			{/* <CoinPriceList coin={coin} /> */}
			<main className={styles.NewOrderPage}>
				<aside>
					<Logo />
					<CategoryList
						categories={categoriesRef.current}
						cart={setCart}
						setActiveCat={setActiveCat}
					/>
					<Link to="/orders" className="button btn-sm">
						PREVIOUS ORDERS
					</Link>
				</aside>
				<MenuList
					menuItems={menuItems.filter(
						(item) => item.category.name === activeCat
					)}
					handleAddToOrder={handleAddToOrder}
				/>
				<OrderDetail
					order={cart}
					handleChangeQty={handleChangeQty}
					handleCheckout={handleCheckout}
				/>
			</main>
		</div>
	);
}
