import { PreRenderHTMLArgs } from 'gatsby';
import React from 'react';

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }: PreRenderHTMLArgs) =>
	replaceHeadComponents(
		[
			...getHeadComponents(),
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />,
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />,
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />,
			<link rel="manifest" href="/favicon/site.webmanifest" />,
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />,
			<link rel="shortcut icon" href="/favicon/favicon.ico" />,
			<meta name="msapplication-TileColor" content="#2b5797" />,
			<meta name="msapplication-config" content="/favicon/browserconfig.xml" />,
			<meta name="theme-color" content="#ffffff" />
			// 95% sure this will come back to bite me
		].map((e, i) => ({ ...(e as JSX.Element), key: i }))
	);
