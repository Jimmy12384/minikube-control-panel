import Card from "@/component/common/Card";
import styles from "@/styles/component/common/Card.module.css";

const MinikubeImagesPage = () => {
  return (
    <div className={styles.horizontalCards}>
      <Card flex={3}>Minikube Registry</Card>
      <Card flex={3}>Local Registry</Card>
    </div>
  );
};

export default MinikubeImagesPage;
