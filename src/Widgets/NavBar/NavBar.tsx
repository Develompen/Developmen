import style from './styles.module.scss';
import { Link } from 'react-scroll';
import logo from '../../assets/imgs/Asadbek.jpg';
import useNavBar  from './Hooks/useNavBar';

const NavBar: React.FC = () => {
	const { links, navRefs, underlineStyle, handleSetActive } = useNavBar();

	return (
		<nav className={style['nav']}>
			<div className={`${style['nav-content']} container`}>
				<Link 
					to="about"
					className={style['logo']}
					offset={-230}
					spy={true}
					smooth={true}
					duration={500}
				>
					<img src={logo} className={style['nav-logo']} alt="" />
				</Link>
				<div className={style['wrapper']}>
					<button
						className={style['moving-box']}
						style={{
							left: `${underlineStyle.left}px`,
							width: `${underlineStyle.width}px`,
							border: `${underlineStyle.border}`,
						}}
					></button>
					<ul className={style['nav-list']}>
						{links.map((link, index) => (
							<li
								key={link.to}
								ref={(el) => void (el && (navRefs.current[index] = el))}
								className={style['nav-item']}
							>
								<Link
									offset={link.offset}
									to={link.to}
									spy={true}
									smooth={true}
									duration={500}
									onSetActive={handleSetActive}
									className={style['nav-list__link']}
									activeClass={style.active}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;