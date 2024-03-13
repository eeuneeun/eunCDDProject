"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@stories/Button";

export default function Signup() {
  return (
    <>
      <main>
        <h2>회원가입 페이지</h2>

        <Button primary={true} label="회원가입" />
      </main>
    </>
  );
}
