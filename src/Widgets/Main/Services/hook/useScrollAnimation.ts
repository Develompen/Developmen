import { useState, useEffect, type RefObject } from 'react';

const useScrollAnimation = (ref: RefObject<HTMLElement>, threshold = 0.2) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!ref.current) return;

			const elementTop = ref.current.getBoundingClientRect().top;
			const elementHeight = ref.current.getBoundingClientRect().height;
			const windowHeight = window.innerHeight;

			const isElementVisible =
				elementTop < windowHeight * (1 - threshold) &&
				elementTop + elementHeight > 0;

			setIsVisible(isElementVisible);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [ref, threshold]);

	return isVisible;
};

export default useScrollAnimation;
