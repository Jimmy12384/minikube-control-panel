import Image from "next/image";
import { PrimeIcons } from "primereact/api";
import { Button } from "primereact/button";
import React, { useState } from "react";
import NextNProgress from "nextjs-progressbar";
import styles from "../../styles/component/header/ControlPanelHeader.module.css";
import SettingsDialog from "../settings/SettingsDialog";
import Link from "next/link";

const ControlPanelHeader = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.header} id="header">
      <Link href="/kube/services">
        <div className={styles.headerLink} style={{ boxShadow: "none" }}>
          <Image
            src="/assets/images/minikube.svg"
            alt="mcp"
            width="40px"
            height="40px"
            className={styles.headerImage}
          />
          <h2 className={styles.title}>Minikube Control Panel</h2>
        </div>
      </Link>
      <div className={styles.flexEnd} role="button" aria-label="Settings">
        <Button
          className="p-button-rounded p-button-rounded settings"
          icon={PrimeIcons.COG}
          style={{
            backgroundColor: "var(--tertiary-light)",
            color: "var(--background)",
            width: "30px",
            height: "30px",
            transform: "scale(1.2)",
            border: "none",
          }}
          onClick={() => setVisible(true)}
        />
        <SettingsDialog visible={visible} setVisible={setVisible} />
      </div>
      <NextNProgress color="orange" options={{ showSpinner: false }} />
    </div>
  );
};

export default ControlPanelHeader;
