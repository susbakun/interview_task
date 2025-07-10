import React from "react";
import styles from "./AuthComponent.module.scss";

function LoginInput({
  inputValue,
  handleInputChange,
  error,
}: {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${inputValue === "" ? styles.empty : styles.notEmpty}`}
        type="tel"
        placeholder="شماره موبایل خود را وارد کنید"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={11}
        required
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default LoginInput;
