import styles from "../../styles/component/vertical-menu/MinikubeStatus.module.css";
import { Tooltip } from "primereact/tooltip";

interface Props {
  minikubeRunning: boolean;
}

const MinikubeStatus = ({ minikubeRunning }: Props) => {
  const statusIcon = minikubeRunning ? (
    <i className={`pi pi-check-circle ${styles.white}`}></i>
  ) : (
    <i className={`pi pi-times-circle ${styles.white}`}></i>
  );

  return (
    <div className={styles["flex-end"]} id="status">
      <Tooltip
        target="#status"
        content={`lol this is useless rn`}
        position="top"
        style={{ fontSize: "0.8em" }}
      />
      <div
        className={`${styles["minikube-status"]} ${
          styles[minikubeRunning ? "minikube-active" : "minikube-inactive"]
        }`}
      >
        <span>{statusIcon}</span>
      </div>
    </div>
  );
};

export default MinikubeStatus;
