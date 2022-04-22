import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import styles from '../../styles/component/header/SettingsDialog.module.css';

interface SettingsDialogProps {
  visible: boolean;
  setVisible: (val : boolean) => void;
}

const SettingsDialog = ({ visible, setVisible } : SettingsDialogProps) => {
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
					style={{ backgroundColor: "var(--primary)", border: 'none' }}
				/>
			</div>
		);
	};

	return (
		<Dialog
			header="Control Panel Settings"
			visible={visible}
			style={{ width: "70vw", backgroundColor: 'var(--background)'}}
			footer={renderFooter()}
			onHide={() => setVisible(false)}
		>
			<p>
				There currently aren't any settings, but when there are, you'll see them here :,)
			</p>
		</Dialog>
	);
};

export default SettingsDialog;
