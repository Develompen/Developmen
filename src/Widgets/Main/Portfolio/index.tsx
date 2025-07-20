import styles from './styles.module.scss';
import { Element } from 'react-scroll';
import notes from '../../../assets/imgs/Notes.png';
import weather from '../../../assets/imgs/Weather.png';
import clock from '../../../assets/imgs/Clock.png';
import films from '../../../assets/imgs/DjBurgers.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Portfolio = () => {
	const projects = [
		{
			title: 'Weather',
			src: weather,
			url: 'https://develompen.github.io/Weather/',
		},
		{ title: 'Notes', src: notes, url: 'https://develompen.github.io/Notes/' },
		{ title: 'Clock', src: clock, url: 'https://develompen.github.io/Clock/' },
		{
			title: 'DjBerger',
			src: films,
			url: 'https://develompen.github.io/DJBurger/',
		},
	];

	const splideOptions = {
		type: 'loop',
		perPage: 3,
		perMove: 1,
		gap: '50px',
		pagination: false,
		autoplay: true,
		interval: 2000,
		speed: 800,
		breakpoints: {
			1024: {
				perPage: 2,
			},
			768: {
				perPage: 1,
				gap: '30px',
			},
		},
	};

	return (
		<Element name="portfolio">
			<div className={`${styles['portfolio-content']} container`}>
				<h1 className={styles.title}>Portfolio:</h1>

				<div className={styles.sliderContainer}>
					<Splide options={splideOptions} aria-label="My projects">
						{projects.map((project, index) => (
							<SplideSlide key={index}>
								<div className={styles["div-pading"]}>
									<div className={styles.card}>
										<h1>{project.title}</h1>
										<div className={styles.imageWrapper}>
											<img src={project.src} alt={project.title} />
										</div>
										<button onClick={() => window.open(project.url, '_blank')}>
											<span>посмотреть</span>
										</button>
									</div>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</Element>
	);
};

export default Portfolio;
