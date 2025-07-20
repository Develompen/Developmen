import styles from './styles.module.scss';
import { Element } from 'react-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import useSkills from './hooks/useSkills';

const Experience = () => {
	const skills = useSkills();

	return (
		<div className={`${styles['experience-content']} container`}>
			<h1>Опыт:</h1>
			<Element name='experience' className={styles["photo-languages"]}>
				<Splide
					options={{
						type: 'loop',
						perPage: 4,
						gap: '-100px',
						drag: true,
						pagination: false,
						arrows: false,
						autoScroll: {
							speed: 1.5,
							pauseOnHover: false,
							pauseOnFocus: false,
						},
					}}
					extensions={{ AutoScroll }}
				>
					{skills.map((skill, index) => (
						<SplideSlide key={index}>
							<div className={styles['language-experience']}>
								<img
									src={skill.src}
									width="100"
									height="100"
									alt={skill.alt}
									style={skill.invert ? { filter: 'invert(1)' } : {}}
								/>
								<div className={styles['block-experience']}>
									<div style={{ width: skill.width }}></div>
								</div>
								<h2>{skill.percent}</h2>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</Element>
		</div>
	);
};

export default Experience;