import "../styles/pages/app.css";
import "primereact/resources/themes/vela-orange/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css";

import { AppProps } from "next/app";

import ControlPanelHeader from "@/component/header/ControlPanelHeader";
import ControlPanelVerticalMenu from "@/component/vertical-menu/ControlPanelVerticalMenu";
import MinikubeStatus from "@/component/vertical-menu/MinikubeStatus";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useLocalStorage } from "usehooks-ts";
import _defaultTo from "lodash-es/defaultTo";
import ColorUtil, { ColorKeyValuePair } from "@/utils/ColorUtil";

const MinikubeControlPanel = ({ Component, pageProps }: AppProps) => {
	const [minikubeRunning] = useState(true);
	const [storedColors, setStoredColors] = useLocalStorage(
		"mkcp-colors",
		[] as ColorKeyValuePair[]
	);

	useEffect(() => {
		const keys = storedColors.map((color) => color.key);
		ColorUtil.getPalette().forEach((themeItem) => {
			if (!keys.includes(themeItem.property)) {
				storedColors.push({
					key: themeItem.property,
					value: window
						.getComputedStyle(document.documentElement)
						.getPropertyValue(`--${themeItem.property}`)
						.substring(1),
				});
			}
		});

		setStoredColors(storedColors);
		storedColors.forEach((color, key) => {
			console.log(color);
			document.documentElement.style.setProperty(
				`--${color.key}`,
				`#${color.value}`
			);
		});
	}, []);

	return (
		<div className={"main-wrapper"}>
			<Head>
				<title>Minikube Control Panel</title>
			</Head>
			<ControlPanelHeader />

			<div className={"flex-horizontal menu"}>
				<div className={"flex-vertical"}>
					<ControlPanelVerticalMenu />
					<MinikubeStatus minikubeRunning={minikubeRunning} />
				</div>
				<div className={"content-wrapper"} id="content-wrapper">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
};
export default MinikubeControlPanel;
