import { useRef } from 'react';
import styles from './styles.module.scss';
import { Element } from 'react-scroll';
import useScrollAnimation from './hook/useScrollAnimation';

const Services = () => {
	const textRef = useRef<HTMLDivElement>(null);
	const isVisible = useScrollAnimation(textRef);

	return (
		<div className={`${styles['services-content']} container`}>
			<Element name="services" className={styles['services-text-container']}>
				<div
					ref={textRef}
					className={`${styles['services-text']} ${isVisible ? styles.visible : styles.hidden}`}
				>
					<h1>Услуги</h1>
					<p>Junior Frontend-разработчик с уверенным стеком</p>
					<p>Адаптивная и кроссбраузерная вёрстка на SCSS</p>
					<p>Компонентный и чистый код на React + TypeScript</p>
					<p>Уверенная работа с API, Redux и архитектурой SPA</p>
				</div>
			</Element>
		</div>
	);
};

export default Services;
