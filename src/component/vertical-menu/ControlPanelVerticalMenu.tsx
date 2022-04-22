import styles from '../../styles/component/vertical-menu/ControlPanelVerticalMenu.module.css';
import VerticalMenuItem from './VerticalMenuItem';

const ControlPanelHeader = () => {
	return (
		<div className={styles["vertical-menu"]}>
			<VerticalMenuItem
				href="/kube/services"
				src="/assets/images/microservices.svg"
				title="Microservices"
			/>
			<VerticalMenuItem
				href="/kube/images"
				src="/assets/images/cloud.svg"
				title="Images"
			/>
			<VerticalMenuItem
				href="/kube/volumes"
				src="/assets/images/hard-drive-solid.svg"
				title="Volumes"
			/>
			<VerticalMenuItem
				href="/minikube/manage"
				src="/assets/images/power-off-solid.svg"
				title="Manage Minikube"
			/>
		</div>
	);
};

export default ControlPanelHeader;
