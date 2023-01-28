import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';

export interface PageWrapperProps {
	children: ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
	<div>
		<Navbar />
		<main>{children}</main>
	</div>
);
