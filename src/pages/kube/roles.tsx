import Card from "@/component/common/Card";
import styles from "@/styles/component/common/Card.module.css";

const ServicesPage = () => {
  return (
    <div className={styles.horizontalCards}>
      <Card>Service Accounts</Card>
      <Card>Cluster Roles</Card>
      <Card>Cluster Role Bindings</Card>
    </div>
  );
};

export default ServicesPage;
