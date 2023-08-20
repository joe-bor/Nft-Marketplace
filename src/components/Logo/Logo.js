import styles from './Logo.module.scss';
import { useState } from 'react';

export default function Logo({ imgPath, text, href }) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className={styles.Logo} 
		onMouseEnter={() => setIsHovered(true)}
		onMouseLeave={() => setIsHovered(false)}
		>
			<img src={imgPath}/>
			<a href={href} target='_blank'>{text}</a>
		</div>
	);
}
