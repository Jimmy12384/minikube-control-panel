import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { TabMenu } from "primereact/tabmenu";
import { MenuItem } from "primereact/menuitem";
import { useState } from "react";
import TabRouter from "../common/TabRouter";
import ThemeEditor from "../settings/ThemeEditor";
import ConnectionSettings from "./ConnectionSettings";
interface SettingsDialogProps {
	visible: boolean;
	setVisible: (val: boolean) => void;
}

const SettingsDialog = ({ visible, setVisible }: SettingsDialogProps) => {
	const menuItems: MenuItem[] = [
		{ label: "Theme", icon: "pi pi-fw pi-palette" },
		{ label: "Connection", icon: "pi pi-fw pi-globe" },
	];
	const [tabIndex, setTabIndex] = useState(0);

	const renderFooter = () => {
		return (
			<div>
				<Button
					label="Cancel"
					icon="pi pi-times"
					onClick={() => setVisible(false)}
					className="p-button-text"
					style={{ color: "var(--primary)" }}
				/>
				<Button
					label="Save"
					icon="pi pi-save"
					onClick={() => setVisible(false)}
					autoFocus
					style={{ backgroundColor: "var(--primary)", border: "none" }}
				/>
			</div>
		);
	};

	return (
		<Dialog
			header="Control Panel Settings"
			visible={visible}
			style={{ width: "70vw", backgroundColor: "var(--background)" }}
			footer={renderFooter()}
			onHide={() => setVisible(false)}
		>
			<TabMenu
				model={menuItems}
				activeIndex={tabIndex}
				onTabChange={(e) => setTabIndex(e.index)}
			/>
			<TabRouter activeIndex={tabIndex}>
				<ThemeEditor />
				<ConnectionSettings />
			</TabRouter>
		</Dialog>
	);
};

export default SettingsDialog;
