import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa';

import * as styles from '../styles/Footer.module.css';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<a href="https://github.com/team6962" target="_blank" rel="noreferrer">
					<FaGithub size={24} />
					<span className={styles.hidden}>Github</span>
				</a>
				<a href="https://instagram.com/frcteam6962" target="_blank" rel="noreferrer">
					<FaInstagram size={24} />
					<span className={styles.hidden}>Instagram</span>
				</a>
				<a href="https://youtube.com/@frcteam6962" target="_blank" rel="noreferrer">
					<FaYoutube size={24} />
					<span className={styles.hidden}>Youtube</span>
				</a>
				<a href="mailto:contact@team6962.com" target="_blank" rel="noreferrer">
					<FaEnvelope size={24} />
					<span className={styles.hidden}>Email</span>
				</a>
			</div>
			<span>© {new Date().getFullYear()} Antares</span>
		</footer>
	);
};
