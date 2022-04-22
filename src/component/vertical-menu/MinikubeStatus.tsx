import styles from "../../styles/component/vertical-menu/MinikubeStatus.module.css";
import {Tooltip} from 'primereact/tooltip';

interface Props {
  minikubeRunning : boolean;
}

const MinikubeStatus = ({ minikubeRunning } : Props) => {

  const statusText = minikubeRunning ? 'Engine Running' : 'Engine Dead'

	return (
		<div className={styles["flex-end"]} id="status">
      <Tooltip target="#status" content={`lol this is useless rn`}  position='top' style={{ fontSize: '0.8em' }}/>
			<div className={`${styles["minikube-status"]} ${styles[minikubeRunning ? 'minikube-active' : 'minikube-inactive']}`}>
				<span>{statusText}</span>
			</div>
		</div>
	);
};

export default MinikubeStatus;
