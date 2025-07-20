import { useRef, useState } from 'react';

interface LinkItem {
  name: string;
  to: string;
  offset: number;
}

const useNavBar = () => {
	const navRefs = useRef<HTMLLIElement[]>([]);
	const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number; border?: string }>({ left: 0, width: 0 });

	const links: LinkItem[] = [
		{ name: 'Обо мне', to: 'about', offset: -230},
		{ name: 'Опыт', to: 'experience', offset: -400 },
		{ name: 'Услуги', to: 'services', offset: -290 },
		{ name: 'Портфолио', to: 'portfolio', offset: -150 },
	];

	const handleSetActive = (to: string) => {
		const index = links.findIndex(link => link.to === to);
		const el = navRefs.current[index];
		if (el) {
			const { offsetLeft, offsetWidth } = el;
			setUnderlineStyle({ left: offsetLeft - 10, width: offsetWidth + 20, border: '1px solid #585858' });
			
		}
	};
	return { links, navRefs, underlineStyle, handleSetActive };
}

export default useNavBar;