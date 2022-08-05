import Card from "@/component/common/Card";
import styles from "@/styles/component/common/Card.module.css";

const ServicesPage = () => {
  return (
    <div className={styles.horizontalCards}>
      <Card>Microservices with drill down</Card>
      <Card>Resources Allocation</Card>
    </div>
  );
};

export default ServicesPage;
