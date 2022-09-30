import { ReactElement } from "react";
import styles from "../../styles/component/common/Card.module.css";

interface CardProps {
  flex?: number;
  minWidth?: string;
  minHeight?: string;
  children?: ReactElement | ReactElement[] | string;
}

const Card = ({ minWidth, minHeight, children, flex }: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        minWidth: minWidth || "300px",
        minHeight: minHeight || "300px",
        flex: flex || undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
