import styles from './styles.module.scss';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const ContactPanel = () => {
	const handleCall = () => {
		window.location.href = 'tel:+998910058284';
	};

	const handleTelegram = () => {
		window.open('https://t.me/asadbekaliboev', '_blank');
	};

	const handleEmail = () => {
		window.location.href = 'mailto:asadbekalibiev@gmail.com';
	};

	return (
		<div className={`${styles['footer-content']} container`}>
			<div>
				<button onClick={handleCall}>
					<FiPhone size={10} />
				</button>
				<button onClick={handleTelegram}>
					<FaTelegramPlane size={10} />
				</button>
				<button onClick={handleEmail}>
					<FiMail size={10} />
				</button>
			</div>
		</div>
	);
};

export default ContactPanel; 
