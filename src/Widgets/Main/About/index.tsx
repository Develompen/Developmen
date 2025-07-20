import { Element } from 'react-scroll';
import styles from './styles.module.scss';

const About: React.FC = () => {
	return (
		<section className={`${styles['about-content']} container`}>
			<Element name="about">
				<h1 style={{animationDelay: '1.5s'}}>Привет! 👋</h1>
			</Element>
			<div>
				<p style={{ animationDelay: '2s'}}>
					Меня зовут Асадбек. Я Junior Frontend-разработчик с уверенным знанием <strong>HTML</strong>, <strong>CSS (включая SCSS-модули)</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong> и <strong>Redux</strong>.
				</p>
				<p style={{ animationDelay: '2.5s'}}>
					Работаю с компонентной архитектурой, понимаю принципы props, state, хуков (useState, useEffect и т.д), делаю SPA с помощью <strong>React Router</strong> и <strong>react-scroll</strong>.
				</p>
				<p style={{ animationDelay: '3s'}}>
					Умею отправлять и обрабатывать API-запросы через <strong>axios</strong>, использовать <strong>jwt-decode</strong> для работы с токенами. Пишу адаптивную верстку, учитываю кроссбраузерность и удобство на всех устройствах.
				</p>
				<p style={{ animationDelay: '3.5s'}}>
					Соблюдаю чистоту кода, работаю через GitHub и активно развиваюсь, углубляя знания в архитектуре и производительности React-приложений.
				</p>
			</div>
		</section>
	);
};

export default About;
