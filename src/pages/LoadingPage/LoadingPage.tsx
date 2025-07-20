import styles from './styles.module.scss';
import logo from '../../assets/imgs/Asadbek.jpg'

const LoadingPage = () => {
	return (
		<div className={styles['loading-content']}>
			<div className={styles['logo']}>
				<img src={logo} alt="" className={styles['logo-img']}/>
			</div>
			<ul className={styles['loading-list']}>
				<li className={styles['loading-list__link']}><span className={styles.left}>Welcome</span> <span className={styles.right}>to</span></li>
				<li className={styles['title-link']}>My Website</li>
			</ul>
		</div>
	)
}

export default LoadingPage;