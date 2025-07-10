"use client";

import React, { useEffect, useState } from "react";
import styles from "./AuthComponent.module.scss";
import SubmitButton from "./SubmitButton";
import LoginInput from "./LoginInput";
import { redirect, useRouter } from "next/navigation";

function AuthComponent() {
  const [inputValue, setInputValue] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const validateIranianPhoneNumber = (phoneNumber: string): boolean => {
    // Check if it starts with 09 and has exactly 11 digits
    const iranianPhoneRegex = /^09\d{9}$/;
    return iranianPhoneRegex.test(phoneNumber);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Clear error when user starts typing
    if (error) {
      setError("");
    }

    if (value.length > 0 && !validateIranianPhoneNumber(value)) {
      if (value.length >= 11) {
        setError("شماره موبایل باید با 09 شروع شده و 11 رقم باشد");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = inputValue.trim();

    if (!validateIranianPhoneNumber(phoneNumber)) {
      setError("شماره موبایل باید با 09 شروع شده و 11 رقم باشد");
      return;
    }

    try {
      setIsPending(true);
      setError("");
      const response = await fetch(
        `https://randomuser.me/api/?results=1&nat=us`
      );
      const data = await response.json();
      setIsPending(false);
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/dashboard");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("خطا در ارسال اطلاعات");
      setIsPending(false);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      redirect("/dashboard");
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>Interview Scheduler</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <LoginInput
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          error={error}
        />
        <SubmitButton isPending={isPending} />
      </form>
    </div>
  );
}

export default AuthComponent;
