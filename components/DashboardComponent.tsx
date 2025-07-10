"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import styles from "./DashboardComponent.module.scss";
import WelcomeComponent from "./WelcomeComponent";

function DashboardComponent() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      redirect("/auth");
    }
  }, []);

  return (
    <div className={styles.container}>
      <WelcomeComponent />
    </div>
  );
}

export default DashboardComponent;
